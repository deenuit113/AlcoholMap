package com.sh16.alcoholmap.module.jwt;

import com.sh16.alcoholmap.common.config.AuthConst;
import com.sh16.alcoholmap.module.jwt.TokenUtils;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;

public class TokenToId {
    public static String check(HttpServletRequest httpRequest) {
        String header = httpRequest.getHeader(AuthConst.AUTH_HEADER);
        if (header == null) {
            return null;
        }
        String token = TokenUtils.getTokenFromHeader(header);
        Claims claims = TokenUtils.getClaimsFromToken(token);
        String userId =  (String) claims.get("id");
        return userId;
    }
}
