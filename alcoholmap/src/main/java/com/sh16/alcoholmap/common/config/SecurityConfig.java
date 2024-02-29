package com.sh16.alcoholmap.common.config;

import com.sh16.alcoholmap.module.jwt.JwtAuthenticationFilter;
import com.sh16.alcoholmap.module.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;


@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;


    // 스프링 시큐리티 기능 비활성화
	@Bean
	public WebSecurityCustomizer configure() {
		return (web -> web.ignoring()
				.requestMatchers("/**") //일단 전부 허용(test 위함)
		);
	}

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        /**
         * 세션, httpBasic, session 기능 disable
         */
        http.csrf(cs-> cs.disable())
                .sessionManagement(s->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .formLogin(f->f.disable())
                .httpBasic(h->h.disable());
                //스프링 3.x 버전 부터는 위의 식처럼 람다식으로 표현 해주는것이 좋음
                // httpBasic 방식은 headers의 Authorization의 값으로 ID와 PW를 포함해서 request를 보내는데
                // 이 방식대로 하면 ID와 PW가 노출되기 때문에 보안에 상당한 취약점을 들어낸다.
                // 따라서 ID와 PW 대신에 Token을 사용하는 방식인 httpBearer 방식을 사용하는 것이 그나마 보안에 덜 취약하다.
                // 즉, httpBearer방식을 사용하기 위해서 Session, formLogin, HttpBasic을 다 비활성화 시킴.

        /**
         * 권한 부여
         */
        http.authorizeRequests(authorize-> {
            authorize
                    .requestMatchers("/user/**").hasAnyRole("USER","MANAGER","ADMIN")
                    .requestMatchers("/manager/**").hasAnyRole("MANAGER","ADMIN")
                    .requestMatchers("/admin/**").hasAnyRole("ADMIN")
                    // hasAnyRole() 메소드는 자동으로 앞에 ROLE_을 추가해서 체크해준다 (각 파라미터는 or 연산)

//                            .requestMatchers("/user/**").hasAnyAuthority("USER","MANAGER","ADMIN")
//                            .requestMatchers("/user/**").authenticated()
//                            .requestMatchers("/manager/**").hasAnyAuthority("MANAGER", "ADMIN")
//                            //.requestMatchers("/manager/**").access("hasAuthority('ROLE_ADMIN')")
//                            .requestMatchers(("/admin/**")).hasAuthority("ADMIN")
                    .anyRequest().permitAll();  // 이외의 요청은 모두 허용함
        });

        /**
         *  JwtFilter 추가
         */
        http.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }


    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
