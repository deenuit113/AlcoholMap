package com.sh16.alcoholmap.module.member;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Table(name = "users")
@NoArgsConstructor
@Getter
@Entity
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "capa_soju")
    private int capaSoju;

    @Builder
    public User(String email, String password, int capaSoju, String auth){
        this.email = email;
        this.password = password;
        this.capaSoju = capaSoju;

    }

    @Override // 권한 반환
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return List.of(new SimpleGrantedAuthority("user"));
    }

    @Override
    public String getUsername(){
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // true : 만료 x
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // true : 잠금 x
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // true : 만료 x

    }

    @Override
    public boolean isEnabled() {
        return true; // true : 사용 가능

    }


}
