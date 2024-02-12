package com.sh16.alcoholmap.module.member;

import org.springframework.web.bind.annotation.GetMapping;

public class UserViewController {

    @GetMapping("/home")
    public String home(){
        return "home";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/signup")
    public String signup(){
        return "signup";
    }
}
