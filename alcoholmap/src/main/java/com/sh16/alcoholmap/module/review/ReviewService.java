package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.member.Response;
import com.sh16.alcoholmap.module.member.User;
import com.sh16.alcoholmap.module.member.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;

    /**
     * 식당 리뷰 추가(저장)
     * @param userId
     * @param review
     * @return
     */
    public ResponseEntity<Response> addPlaceReviews(String userId, ReviewDto.ReviewRequest review) {
        Optional<User> user = userRepository.findUserById(userId);
        if (user.isEmpty()) {
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

}
