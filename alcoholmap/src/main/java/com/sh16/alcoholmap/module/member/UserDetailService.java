package com.sh16.alcoholmap.module.member;

import com.sh16.alcoholmap.module.jwt.UserCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
    }

    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(User user) {

        UserCustom userCustom = new UserCustom(user.getUsername()
                , passwordEncoder.encode(user.getPassword()), authorities(user.getRoles())
                , user.getId()
        );

        return userCustom;
    }

    private static Collection authorities(List<String> roles){
        Collection authorities = new ArrayList<>();
        for (String role : roles) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        }
        return authorities;
    }

//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String email){
//        return userRepository.findByEmail(email)
//                .orElseThrow(()-> new IllegalArgumentException(email));
//    }
//    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
//    private UserDetails createUserDetails(User user) {
//        return User.builder()
//                .email(user.getUsername())
//                .password(passwordEncoder.encode(user.getPassword()))
//                .capaSoju(user.getCapaSoju())
//                .roles(user.getRoles())
//                .build();
//    }
}
