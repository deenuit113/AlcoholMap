package com.sh16.alcoholmap.module.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String email;
    private String password;
    private String nickname;
    private int capaSoju;
    private String roles;




    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    public static class UpdateRequest {
        private Long id;
        private String nickname;
        private int capaSoju;
        private String email;
    }

}
