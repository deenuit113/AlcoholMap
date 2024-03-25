package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.place.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
    // Place 엔티티로 리뷰를 검색하는 메서드는 ReviewRepository에서 제거하거나 수정합니다.
    // Review 엔티티의 직접적인 조회와 관련이 없으므로, 필요하다면 PlaceRepository에 정의하는 것이 적합합니다.

    // 특정 장소에 대한 리뷰 개수 조회
    @Query("SELECT COUNT(r) FROM Review r WHERE r.place.id = :placeId")
    int getPlaceReviewsNumByPlaceId(@Param("placeId") Long placeId);

    // 특정 장소에 대한 리뷰의 평균 별점 조회
    @Query("SELECT AVG(r.starRate) FROM Review r WHERE r.place.id = :placeId")
    Optional<Float> findAverageStarRateByPlaceId(@Param("placeId") Long placeId);

    // 특정 장소의 리뷰 조회 (페이징 처리)
    @Query("SELECT r FROM Review r WHERE r.place.id = :placeId")
    List<Object[]> getPlaceReviewsByPlaceId(@Param("placeId") Long placeId);

    // 여러 장소에 대한 평균 별점과 리뷰 개수 조회
    @Query("SELECT r.place.id as placeId, AVG(r.starRate) as averageStarRate, COUNT(r) as reviewCount " +
            "FROM Review r WHERE r.place.id IN :placeIds GROUP BY r.place.id")
    List<Object[]> findAverageStarRateAndReviewCountByPlaceIds(@Param("placeIds") List<Long> placeIds);
}
