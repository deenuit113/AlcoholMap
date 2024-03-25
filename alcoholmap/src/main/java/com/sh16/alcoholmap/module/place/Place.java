package com.sh16.alcoholmap.module.place;

import com.sh16.alcoholmap.module.review.Review;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Place {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "place_id")
    private Long id;

    private String name;

    private String description;

    private double latitude;

    private double longitude;

    private String phone;

    private String location;

    private String operationHours;

    private int categoryId;

    @OneToMany(mappedBy = "placeId", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<>();
}
