package com.sh16.alcoholmap.module.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.xml.bind.DatatypeConverter;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Component
public class TokenUtils {

    private static String SECRET_KEY_STATIC;

    // http 헤더에서 토큰 진짜 내용 가져오기
    public static String getTokenFromHeader(String header) {
        return header.split(" ")[1];
    }

    // jwt에서 claims(payload) 부분 가져오기
    public static Claims getClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(DatatypeConverter.parseBase64Binary(SECRET_KEY_STATIC))
                .parseClaimsJws(token).getBody();
    }

    // Claims에서 user id 가져오기
    public static String getUserIdFromToken(String token) {
        Claims claims = getClaimsFromToken(token);
        return (String) claims.get("id");
    }
}

