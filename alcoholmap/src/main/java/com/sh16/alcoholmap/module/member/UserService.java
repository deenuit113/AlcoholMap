package com.sh16.alcoholmap.module.member;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //패스워드를 BCryptPasswordEncoder 로 암호화 한 후 저장
    public Long save(UserDTO dto){
        return userRepository.save(User.builder()
                        .email(dto.getEmail())
                        .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                        .build()).getId();
    }
}
