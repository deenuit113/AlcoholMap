package com.sh16.alcoholmap.module.review;


import com.sh16.alcoholmap.common.config.AuthConst;
import com.sh16.alcoholmap.module.jwt.TokenUtils;
import com.sh16.alcoholmap.module.member.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class ReviewController {

    /**
     * 식당 리뷰 가져오기
     * @param placeId
     * @param page
     * @param pagesize
     * @return
     * @throws PageIndexLessThanZeroException
     */
    @GetMapping("/place/review/{placeId}")
    public ResponseEntity<Response> getPlaceReviewsByUser(@PathVariable int placeId
            , @RequestParam(defaultValue = "1") int page
            , @RequestParam(defaultValue = "10") int pagesize) throws PageIndexLessThanZeroException {
        try {
            return placeReviewService.getPlaceAllReviewsByPlaceId(placeId, page, pagesize);
        } catch (ArithmeticException | IllegalArgumentException e) {
            throw new PageIndexLessThanZeroException();
        }
    }

    /**
     * 식당 리뷰 추가
     * @param myToken
     * @param review
     * @return
     */
    @PostMapping("/place/review")
    public ResponseEntity<Response> addPlaceReviews(@RequestHeader(AuthConst.AUTH_HEADER) String myToken, @RequestBody ReviewDto.ReviewRequest review) {
        String token = TokenUtils.getTokenFromHeader(myToken);
        String userId = TokenUtils.getUserIdFromToken(token);
        return placeReviewService.addPlaceReviews(userId, review);
    }

    /**
     * 식당 리뷰 수정
     * @param myToken
     * @param review
     * @return
     */
    @PutMapping("/place/review")
    public ResponseEntity<Response> editPlaceReviews(@RequestHeader(AuthConst.AUTH_HEADER) String myToken, @RequestBody ReviewDto.ReviewEditRequest review) {
        String token = TokenUtils.getTokenFromHeader(myToken);
        String userId = TokenUtils.getUserIdFromToken(token);
        return placeReviewService.editPlaceReviews(userId, review);
    }

    /**
     * 식당 리뷰 삭제
     * @param myToken
     * @param review
     * @return
     */
    @DeleteMapping("/place/review")
    public ResponseEntity<Response> deletePlaceReviews(@RequestHeader(AuthConstants.AUTH_HEADER) String myToken, @RequestBody ReviewDto.ReviewDeleteRequest review) {
        String token = TokenUtils.getTokenFromHeader(myToken);
        String userId = TokenUtils.getUserIdFromToken(token);
        return placeReviewService.deletePlaceReviews(userId, review);
    }
}
