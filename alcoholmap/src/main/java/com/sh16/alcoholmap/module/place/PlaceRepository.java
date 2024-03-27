package com.sh16.alcoholmap.module.place;

import com.sh16.alcoholmap.module.member.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
    Optional<Place> findPlaceById(Long placeId);
}
