package com.sh16.alcoholmap.module.member;

import lombok.Data;

@Data
public class UserLoginRequestDto {
    private String email;
    private String password;
}
