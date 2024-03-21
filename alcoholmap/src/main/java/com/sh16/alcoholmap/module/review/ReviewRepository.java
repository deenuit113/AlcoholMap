package com.sh16.alcoholmap.module.review;

import com.sh16.alcoholmap.module.place.Place;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    Optional<Place> findPlacesById(Long placeId);

    int getPlaceReviewsNumByPlaceId(Long placeId);

    Optional<Float> getPlaceReviewsAVGByPlaceId(Long placeId);

    List<Object[]> getPlaceReviewsByPlaceId(Long placeId, PageRequest pageRequest);

    @Query("SELECT r.placeId as placeId, AVG(r.starRate) as averageStarRate, COUNT(r) as reviewCount " +
            "FROM Review r WHERE r.placeId IN :placeIds GROUP BY r.placeId")
    List<Object[]> findAverageStarRateAndReviewCountByPlaceIds(@Param("placeIds") List<Long> placeIds);
}
