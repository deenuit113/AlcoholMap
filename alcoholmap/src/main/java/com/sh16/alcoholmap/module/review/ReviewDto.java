package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.place.Place;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

public class ReviewDto {

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class ReviewRequest {
        private float starRate;

        private String content;

        private Place placeId;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class ReviewEditRequest {

        private Long id;

        private float starRate;

        private String content;

        private Long placeId;

    }
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class ReviewDeleteRequest {
        private Long id;
    }
}
