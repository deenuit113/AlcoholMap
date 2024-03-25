package com.sh16.alcoholmap.module.review;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Table(name = "review_like")
@NoArgsConstructor
@IdClass(ReviewLikePK.class)
public class ReviewLike {
    @Id
    @Column(name = "post_id", nullable = false)
    private int reviewId;

    @Id
    @Column(name = "user_id", nullable = false)
    private String userId;

    @Builder
    public ReviewLike(int reviewId, String userId) {
        this.reviewId = reviewId;
        this.userId = userId;
    }

}
