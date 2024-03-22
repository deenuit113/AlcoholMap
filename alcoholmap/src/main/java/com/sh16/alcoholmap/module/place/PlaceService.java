package com.sh16.alcoholmap.module.place;

import com.sh16.alcoholmap.module.review.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final ReviewRepository reviewRepository;

    public List<FirstMapPlaceDto> getRatingsByPlaceIds(List<Long> placeIds) {
        List<Object[]> results = reviewRepository.findAverageStarRateAndReviewCountByPlaceIds(placeIds);
        return results.stream()
                .map(result -> new FirstMapPlaceDto((Long) result[0], (Double) result[1], (Long) result[2]))
                .collect(Collectors.toList());
    }
}
