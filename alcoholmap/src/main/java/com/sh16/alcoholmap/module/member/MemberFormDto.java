package com.sh16.alcoholmap.module.member;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.context.annotation.Bean;

@NoArgsConstructor
@Getter
public class MemberFormDto {

    @NotBlank(message = "필수 입력 값입니다.")
    private String name;

    @NotEmpty(message = "필수 입력 값입니다.")
    @Length(min = 4, message = "비밀번호는 4자 이상 입력해주세요.")
    private String password;

    @Builder
    public MemberFormDto(String name, String password){
        this.name = name;
        this.password = password;
    }


}
