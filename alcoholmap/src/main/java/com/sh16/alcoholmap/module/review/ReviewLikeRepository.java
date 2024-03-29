package com.sh16.alcoholmap.module.review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Integer> {
    @Query(value = "select count(u.id) from Review p, ReviewLike l, User u where p.id = l.reviewId and p.userId.id = u.id and u.id = :id")
    Long getLikes(@Param("id") String id);
}
