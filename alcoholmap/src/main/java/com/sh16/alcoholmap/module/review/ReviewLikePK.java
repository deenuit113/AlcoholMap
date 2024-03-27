package com.sh16.alcoholmap.module.review;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ReviewLikePK implements Serializable {
    private Long reviewId;
    private Long userId;
}