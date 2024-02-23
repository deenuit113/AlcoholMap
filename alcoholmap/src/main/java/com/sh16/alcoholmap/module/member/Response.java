package com.sh16.alcoholmap.module.member;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

@Getter
@AllArgsConstructor
public class Response {
    private int status;
    private String message;
    private Object data;

    public static ResponseEntity<Response> newResult(HttpStatus status, String message, Object result){
        return new ResponseEntity<>(new Response(status.value(), message, result), status);
    }

}
