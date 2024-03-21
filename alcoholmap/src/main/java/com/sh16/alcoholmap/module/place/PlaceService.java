package com.sh16.alcoholmap.module.place;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlaceService {

    public List<PlaceRatingInfo> getRatingsByPlaceIds(List<Long> placeIds) {
        List<Object[]> results = reviewRepository.findAverageStarRateAndReviewCountByPlaceIds(placeIds);
        return results.stream()
                .map(result -> new PlaceRatingInfo((Long) result[0], (Double) result[1], (Long) result[2]))
                .collect(Collectors.toList());
    }
}
