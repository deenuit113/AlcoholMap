package com.sh16.alcoholmap.module.member;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@Controller
public class UserApiController {

    private final UserService userService;

    //회원 가입
    @PostMapping("/user")
    public String signup(UserDTO dto) {
        userService.save(dto);
        return "redirect:/login"; //회원가입 후 /login URL로 이동
    }



}
