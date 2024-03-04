package com.sh16.alcoholmap.module.review;

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
        /**
         * 리뷰 별점 (술점)
         */
        private float starRate;

        /**
         * 리뷰 내용
         */
        private String content;

        /**
         * 맛집 아이디
         */
        private int placeId;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString
    public static class ReviewEditRequest {
        /**
         * 리뷰 아이디
         */
        private int id;

        /**
         * 리뷰 술점 (별점)
         */
        private float starRate;

        /**
         * 리뷰 내용
         */
        private String content;

        /**
         * 맛집 아이디
         */
        private int placeId;


    }
}
