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
    private Long review; // Review 엔티티의 ID 필드 타입에 맞게 수정해야 합니다.
    private Long user;   // User 엔티티의 ID 필드 타입에 맞게 수정해야 합니다.
}