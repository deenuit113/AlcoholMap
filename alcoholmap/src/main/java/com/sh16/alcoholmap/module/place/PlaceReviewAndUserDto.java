package com.sh16.alcoholmap.module.place;

import lombok.*;

@Data
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlaceReviewAndUserDto {

    private Long reviewId;
    private float starRate;
    private String content;
    private String userId;
    private String createDate;
    private String userNickname;
    private String userProfileImage;
}
