package com.sh16.alcoholmap.module.review;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewCommentRepository extends JpaRepository<ReviewComment, Long> {
    Optional<ReviewComment> findReviewCommentByReviewCommentId(@Param("review_comment_id") int commentId);

    int deleteCommentByReviewCommentId(int commentId);
}
