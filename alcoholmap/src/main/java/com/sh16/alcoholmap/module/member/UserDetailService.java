package com.sh16.alcoholmap.module.member;

import com.sh16.alcoholmap.module.jwt.UserCustom;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        log.info("Attempting to load user by email: {}", email);
        Optional<User> byEmail = userRepository.findByEmail(email);
        log.info("Found user by email {}: {}", email, byEmail.isPresent() ? "present" : "not present");


        UserDetails userDetails = userRepository.findByEmail(email)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
        return userDetails;

    }

    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(User user) {


        UserCustom userCustom = new UserCustom(user.getEmail()
                , user.getPassword(), authorities(user.getRoles())
                , user.getId()
        );
        ;

        return userCustom;
    }

//private static Collection<GrantedAuthority> authorities(List<String> roles) {
//    if (roles == null || roles.isEmpty()) {
//        return Collections.emptyList();
//    }
//    Collection<GrantedAuthority> authorities = new ArrayList<>();
//    for (String role : roles) {
//        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
//    }
private static Collection<GrantedAuthority> authorities(String roles) {
    // roles 문자열이 null이거나 비어있는 경우 빈 컬렉션 반환
    if (roles == null || roles.isEmpty()) {
        return Collections.emptyList();
    }

    // roles 문자열을 쉼표로 분할하여 각 권한에 대한 GrantedAuthority 생성
    return Arrays.stream(roles.split(","))
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role.trim()))
            .collect(Collectors.toList());
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
