package com.sh16.alcoholmap.module.place;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FirstMapPlaceDto {

    private Long placeId;
    private Double averageStarRate;
    private Long reviewCount;

    public FirstMapPlaceDto(Long placeId, Double averageStarRate, Long reviewCount) {
        this.placeId = placeId;
        this.averageStarRate = averageStarRate;
        this.reviewCount = reviewCount;
    }

}
