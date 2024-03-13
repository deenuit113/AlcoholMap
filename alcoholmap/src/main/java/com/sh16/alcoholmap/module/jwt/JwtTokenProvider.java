package com.sh16.alcoholmap.module.jwt;

import com.sh16.alcoholmap.common.config.AuthConst;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Slf4j
@Component
public class JwtTokenProvider {


    private final Key key;


    public JwtTokenProvider(@Value("${jwt.secret}") String secretKey){
        byte[] ketBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(ketBytes);
    }



    /**
     * AccessToken, RefreshToken 생성 메서드
     */
    public TokenDto generateToken(Authentication authentication){
        //권한 가져오기
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
        log.info("authorities : " + authorities);

        UserCustom user = (UserCustom) authentication.getPrincipal();
        UserCustom userDetails = (UserCustom) authentication.getPrincipal();
        Long userId = userDetails.getMemberCode();


        long now = (new Date()).getTime();
        // Access Token 생성
        // Date 생성자에 삽입하는 숫자 :
        // 30분 : 1800000 , 1일 : 86400000
        Date accessTokenExpiresIn = new Date(now + 1800000);
        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())
                .claim("auth", authorities)
                .claim("id", userId)


                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();


        // Refresh Token 생성
        String refreshToken = Jwts.builder()
                .setExpiration(new Date(now + 86400000))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        return TokenDto.builder()
                .grantType(AuthConst.TOKEN_TYPE)
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    /**
     *  JWT 토큰을 복호화 해 토큰에 있는 정보를 꺼내는 메서드
     */
    public Authentication getAuthentication(String accessToken){
        //토큰 복호화
        System.out.println("accessToken = " + accessToken);
        Claims claims = parseClaims(accessToken);
        log.info("claims : " + claims);
        log.info("claims.get(auth) : " + claims.get("auth"));

        if (claims.get("auth") == null){
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }

        //클레임에서 권한 정보 가져오기
        Collection<? extends GrantedAuthority> authorities=
                Arrays.stream(claims.get("auth").toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        // UserDetails 객체를 만들어서 Authentication 리턴
        Number idNumber = (Number) claims.get("id");
        Long userId = idNumber.longValue();
        UserCustom principal = new UserCustom(claims.getSubject(), "", authorities, userId);
        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }
    public Long getMemberCodeByRefreshToken(String refreshToken){
        Claims claims = parseClaims(refreshToken);
        return (Long)claims.get("id");
    }

    /**
     * 토큰 정보 검증 메서드
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            log.info("validateToken : " + token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }


    /**
     * 복호화 메서드
     * getAuthentication 메서드에서 사용
     */
    private Claims parseClaims(String accessToken){
        try {
            return Jwts.parserBuilder().setSigningKey(key).build()
                    .parseClaimsJws(accessToken).getBody();
        } catch (ExpiredJwtException e){
            return e.getClaims();
        }
    }

}
