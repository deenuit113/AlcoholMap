package com.sh16.alcoholmap.module.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //패스워드를 BCryptPasswordEncoder 로 암호화 한 후 저장

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
     * (구현중)
     * 회원조회 (마이페이지 조회)
     */
    public UserDTO getProfileByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(
                () -> new UsernameNotFoundException(email + " : 등록되지 않은 이메일 입니다.")
        );
        UserDTO dto = new UserDTO();
        dto.setEmail(user.getEmail());
        dto.setPassword(user.getPassword()); // 실제 배포시에는 비밀번호 반환x
        dto.setCapaSoju(user.getCapaSoju());
        return dto;
    }
}
