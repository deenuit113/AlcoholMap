package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.member.Response;
import com.sh16.alcoholmap.module.member.User;
import com.sh16.alcoholmap.module.member.UserRepository;
import com.sh16.alcoholmap.module.place.Place;
import com.sh16.alcoholmap.module.place.PlaceRepository;
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
    private final PlaceRepository placeRepository;

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
                .place(review.getPlaceId())
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
        // Place 엔티티의 존재 여부 확인
        Optional<Place> place = placeRepository.findPlaceById(placeId);
        if (!place.isPresent()) {
            return Response.newResult(HttpStatus.BAD_REQUEST, placeId + "는 존재하지 않는 맛집입니다.", null);
        }
        // 리뷰 개수 조회
        int totalPageItemCnt = reviewRepository.getPlaceReviewsNumByPlaceId(placeId);

        HashMap<String, Object> hashMap = new LinkedHashMap<>();
        hashMap.put("totalPageItemCnt", totalPageItemCnt);
        hashMap.put("totalPage", ((totalPageItemCnt - 1) / pageSize) + 1);
        hashMap.put("nowPage", page);
        hashMap.put("nowPageSize", pageSize);

        //평균 별점 조회
        Optional<Float> totalStarRate = reviewRepository.findAverageStarRateByPlaceId(placeId);
        if (totalStarRate.isPresent()) {
            hashMap.put("totalStarRate", totalStarRate.get());
        } else {
            hashMap.put("totalStarRate", null);
        }

        // 리뷰 목록 조회
        PageRequest pageRequest = PageRequest.of(page - 1, pageSize);
        List<Object[]> items = reviewRepository.getPlaceReviewsByPlaceId(placeId);

        ArrayList<PlaceReviewAndUserDto> arr = new ArrayList<>();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
        if (!items.isEmpty()) {
            Object[] firstItem = items.get(0);
            for (int i = 0; i < firstItem.length; i++) {
                System.out.println("Item " + i + ": " + firstItem[i]);
            }
        }

        for (Object[] item : items) {
            //String format = formatter.format(item[4]);
            arr.add(PlaceReviewAndUserDto.builder()
                    .reviewId((Long) item[0])
                    .starRate((float) item[1])
                    .content((String) item[2])
                    //.userId((String) item[3])
                    //.craeteDate(format)
                    //.userNickname((String) item[5])
                    .build());
        }
        hashMap.put("reviews", arr);
        return Response.newResult(HttpStatus.OK, placeId + "의 모든 리뷰 목록 조회에 성공했습니다.", hashMap);
        /**
         * 추후 front-end 단 수정 완료 되면 arr 대신 hashMap 리턴
         */
    }



    /**
     * 리뷰 수정
     * @param userId
     * @param review
     * @return
     */
    public ResponseEntity<Response> editPlaceReviews(String userId, ReviewDto.ReviewEditRequest review) {
        Optional<Review> findReview = reviewRepository.findById(review.getId());
        Optional<User> user = userRepository.findUserById(userId);

        if (!findReview.isPresent()) {
            return Response.newResult(HttpStatus.BAD_REQUEST, "리뷰가 존재하지 않습니다.", null);
        }
        if (!user.isPresent()) {
            return Response.newResult(HttpStatus.UNAUTHORIZED, "로그인 후 사용해주세요", null);
        }
        if (!findReview.get().getUserId().equals(userId)) {
            return Response.newResult(HttpStatus.FORBIDDEN, "자신의 리뷰만 수정 가능합니다.", null);
        }
        if (findReview.get().getPlaceId() != review.getPlaceId()) {
            return Response.newResult(HttpStatus.BAD_REQUEST, "맛집 장소가 일치하지 않습니다.", null);
        }
        findReview.get().editReview(review);
        reviewRepository.save(findReview.get());
        return Response.newResult(HttpStatus.OK, "리뷰 수정에 성공했습니다.", null);
    }



    /**
     * 리뷰 삭제
     * @param userId
     * @param review
     * @return
     */
    public ResponseEntity<Response> deletePlaceReviews(String userId, ReviewDto.ReviewDeleteRequest review) {
        Optional<Review> findReview = reviewRepository.findById(review.getId());
        Optional<User> user = userRepository.findUserById(userId);

        if (!findReview.isPresent()) {
            return Response.newResult(HttpStatus.BAD_REQUEST, "리뷰가 존재하지 않습니다.", null);
        }
        if (!user.isPresent()) {
            return Response.newResult(HttpStatus.UNAUTHORIZED, "로그인 후 사용해주세요", null);
        }
        if (!findReview.get().getUserId().equals(userId)) {
            return Response.newResult(HttpStatus.FORBIDDEN, "자신의 리뷰만 삭제 가능합니다.", null);
        }
        reviewRepository.delete(findReview.get());
        return Response.newResult(HttpStatus.OK, "리뷰 삭제에 성공했습니다.", null);
    }
}
