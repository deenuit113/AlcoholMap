package com.sh16.alcoholmap.module.member;

import com.sh16.alcoholmap.module.jwt.JwtTokenProvider;
import com.sh16.alcoholmap.module.jwt.TokenDto;
import com.sh16.alcoholmap.module.jwt.TokenToId;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder; //패스워드를 BCryptPasswordEncoder 로 암호화 한 후 저장

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;




    /**
     * 회원가입
     * @param dto
     * @return
     */
    @Transactional
    public ResponseEntity<Response> signUp(UserDTO dto){
        if (userRepository.findByEmail(dto.getEmail()).isPresent()){
            return Response.newResult(HttpStatus.BAD_REQUEST, "이미 존재하는 이메일 입니다.", null);
        }
        User user = userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .capaSoju(dto.getCapaSoju())
                .build());
        userRepository.save(user);
        return Response.newResult(HttpStatus.OK, "회원가입이 완료되었습니다.", null);
    }

    /**
     * 회원 조회 (마이 페이지)
     */
    public UserDTO getUserInfoByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(
                () -> new UsernameNotFoundException(email + " : 등록되지 않은 이메일 입니다.")
        );
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword()); // 실제 배포시에는 비밀번호 반환x
        dto.setCapaSoju(user.getCapaSoju());
        dto.setNickname(user.getNickname());
        return dto;
    }


    /**
     * 회원 탈퇴
     */
    @Transactional
    public ResponseEntity<Response> deleteUserByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email + " : 사용자를 찾을 수 없습니다."));
        userRepository.delete(user);
        return Response.newResult(HttpStatus.OK, "탈퇴가 완료되었습니다.", null);

    }
    /**
     * 회원 수정
     * 닉네임, capaSoju 변경 가능
     */
    @Transactional
    public ResponseEntity<Response> updateInfo(@RequestBody UserDTO.UpdateRequest requestDTO, HttpServletRequest request) {
        String userId = TokenToId.check(request);
        Optional<User> checkUser = userRepository.findUserByNickname(requestDTO.getNickname());
        if (checkUser.isPresent() && !checkUser.get().getId().equals(userId)) {
            return Response.newResult(HttpStatus.BAD_REQUEST, "이미 존재하는 닉네임입니다.", null);
        }
        if (requestDTO.getNickname().length() > 8) {
            return Response.newResult(HttpStatus.BAD_REQUEST, "닉네임은 8자리 이하만 가능합니다.", null);
        }
        Optional<User> user = userRepository.findUserById(userId);
        user.get().updateInfo(requestDTO.getNickname(), requestDTO.getCapaSoju());
        return Response.newResult(HttpStatus.OK, "정보가 업데이트 되었습니다.", null);
    }

    /**
     * 로그인
     * @param email
     * @param password
     * @return
     */
    @Transactional
    public TokenDto login(String email, String password) {
        // 1. Login email/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = jwtTokenProvider.generateToken(authentication);

        return tokenDto;
    }


}
