package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.member.Response;
import com.sh16.alcoholmap.module.member.User;
import com.sh16.alcoholmap.module.member.UserRepository;
import com.sh16.alcoholmap.module.place.Place;
import com.sh16.alcoholmap.module.place.PlaceReviewAndUserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;

    /**
     * 식당 리뷰 추가(저장)
     * @param email
     * @param review
     * @return
     */
    public ResponseEntity<Response> addPlaceReviews(String email, ReviewDto.ReviewRequest review) {
        Optional<User> user = userRepository.findByEmail(email);
        if (!user.isPresent()) {
            return Response.newResult(HttpStatus.UNAUTHORIZED, "로그인 후 이용해주세요.", null);
        }
        Review newReview = Review.builder()
                .starRate(review.getStarRate())
                .content(review.getContent())
                .placeId(review.getPlaceId())
                .email(user.get().getEmail())
                .build();
        reviewRepository.save(newReview);
        return Response.newResult(HttpStatus.OK, "리뷰 추가에 성공하였습니다.", null);
    }


    /**
     * 리뷰 조회 (술집 별 조회)
     * @param placeId
     * @param page
     * @param pageSize
     * @return
     */
    public ResponseEntity<Response> getPlaceAllReviewsByPlaceId(Long placeId, int page, int pageSize) {
        Optional<Place> place = reviewRepository.findPlacesById(placeId);
        if (!place.isPresent()) {
            return Response.newResult(HttpStatus.BAD_REQUEST, placeId + "는 존재하지 않는 맛집입니다.", null);
        }
        int totalPageItemCnt = reviewRepository.getPlaceReviewsNumByPlaceId(placeId);

        HashMap<String, Object> hashMap = new LinkedHashMap<>();
        hashMap.put("totalPageItemCnt", totalPageItemCnt);
        hashMap.put("totalPage", ((totalPageItemCnt - 1) / pageSize) + 1);
        hashMap.put("nowPage", page);
        hashMap.put("nowPageSize", pageSize);

        Optional<Float> totalStarRate = reviewRepository.getPlaceReviewsAVGByPlaceId(placeId);
        if (totalStarRate.isPresent()) {
            hashMap.put("totalStarRate", totalStarRate.get());
        } else {
            hashMap.put("totalStarRate", null);
        }

        PageRequest pageRequest = PageRequest.of(page - 1, pageSize);
        List<Object[]> items = reviewRepository.getPlaceReviewsByPlaceId(placeId, pageRequest);
        ArrayList<PlaceReviewAndUserDto> arr = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");

        for (Object[] item : items) {
            String format = formatter.format(item[4]);
            arr.add(PlaceReviewAndUserDto.builder()
                    .reviewId((int) item[0])
                    .starRate((float) item[1])
                    .content((String) item[2])
                    .userId((String) item[3])
                    .craeteDate(format)
                    .userNickname((String) item[5])
                    .userProfileImage((String) item[6])
                    .build());
        }
        hashMap.put("reviews", arr);
        return Response.newResult(HttpStatus.OK, placeId + "의 모든 리뷰 목록 조회에 성공했습니다.", hashMap);
    }
}
