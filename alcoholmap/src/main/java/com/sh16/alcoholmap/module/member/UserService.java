package com.sh16.alcoholmap.module.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //패스워드를 BCryptPasswordEncoder 로 암호화 한 후 저장
    @Transactional
    public ResponseEntity<Response> signUp(UserDTO dto){
        if (userRepository.findByEmail(dto.getEmail()).isPresent()){
            return Response.newResult(HttpStatus.BAD_REQUEST, "이미 존재하는 이메일 입니다.", null);
        }
        User user = userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .build());
        userRepository.save(user);
        return Response.newResult(HttpStatus.OK, "회원가입이 완료되었습니다.", null);
    }
}
