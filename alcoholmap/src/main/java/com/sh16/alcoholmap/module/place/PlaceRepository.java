package com.sh16.alcoholmap.module.place;

import com.sh16.alcoholmap.module.member.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlaceRepository {
    Optional<Place> findPlaceById(Long placeId);
}
