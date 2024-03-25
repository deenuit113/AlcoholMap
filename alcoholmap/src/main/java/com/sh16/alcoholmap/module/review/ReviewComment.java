package com.sh16.alcoholmap.module.review;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Getter
@Table(name = "review_comment")
@ToString
@NoArgsConstructor
@Entity
public class ReviewComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    private String writerId;

    @Column(name = "message", nullable = false)
    private String message;


    @Column(name = "create_date", insertable = false, updatable = false)
    private Date createDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id")
    private Review review;

    @Builder
    public ReviewComment(String writerId, String message, Review review) {
        this.writerId = writerId;
        this.message = message;
        this.review = review;
    }
}
