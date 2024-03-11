package com.sh16.alcoholmap.module.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
    Optional<User> findUserById(Long id);
    Optional<User> findUserByNickname(String nickname);

}
