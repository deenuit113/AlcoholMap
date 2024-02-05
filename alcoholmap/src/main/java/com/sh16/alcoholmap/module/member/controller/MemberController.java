package com.sh16.alcoholmap.module.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user/**")
public class MemberController {

    //회원가입 페이지 이동
    @RequestMapping("signup")
    public String create(){
        return "user/signup";
    }



}
