package com.sh16.alcoholmap.module.member;

import com.sh16.alcoholmap.module.jwt.TokenDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

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
     * 회원 조회 (마이페이지)
     * @return dto
     */
    @GetMapping("/users/profile/{email}")
    public ResponseEntity<UserDTO> getProfile(@PathVariable String email){
        UserDTO dto = userService.getUserInfoByEmail(email);
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
     * 회원 정보 수정
     * 닉네임, capaSoju 변경 가능 ----> 구현 예정
     */
//    @PutMapping("/users/profile")
//    public ResponseEntity<Response> updateInfo(@RequestBody UserDTO.UpdateRequest requestDTO, HttpServletRequest httpRequest) {
//        ResponseEntity<Response> updateResponse = userService.updateInfo(requestDTO, httpRequest);
//        if (updateResponse.getStatusCode() != HttpStatus.OK) {
//            return Response.newResult(updateResponse.getStatusCode(), updateResponse.getBody().getMessage(), null);
//        }
//        ResponseEntity<Response> response = userService.getProfile(TokenToId.check(httpRequest), httpRequest);
//        return Response.newResult(response.getStatusCode(), "정보를 수정했습니다.", response.getBody());
//    }


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
