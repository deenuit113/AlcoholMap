package com.sh16.alcoholmap.module.member;

import com.sh16.alcoholmap.module.jwt.TokenDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RequiredArgsConstructor
@RestController
public class UserApiController {

    private final UserService userService;

    /**
     * 회원 가입
     * @param dto
     * @return Response.newResult
     */
    @PostMapping("/users/signup")
    public ResponseEntity<Response> signup(@RequestBody UserDTO dto) {
        return userService.signUp(dto);
    }

    /**
     * 구현중 - 회원 조회 (마이페이지)
     * @return dto
     */
    @GetMapping("/users/profile/{email}")
    public ResponseEntity<UserDTO> getProfile(@PathVariable String email){
        UserDTO dto = userService.getProfileByEmail(email);
        return ResponseEntity.ok(dto);
    }

    /**
     *  회원 탈퇴 - 현재 이메일 기반으로 유저 탈퇴 - 토큰 방식으로 변경 예정
     */
    @DeleteMapping("/users/delete/{email}")
    public ResponseEntity<Response> deleteUser(@PathVariable String email) {
        return userService.deleteUserByEmail(email);
    }

    /**
     *  로그인
     */
    @PostMapping("/users/login")
    public TokenDto login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        String email = userLoginRequestDto.getEmail();
        String password = userLoginRequestDto.getPassword();
        TokenDto tokenInfo = userService.login(email, password);
        return tokenInfo;
    }


    /**
     * 미사용중
     */
    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response){
        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
        return "redirect:/login";
    }



}
