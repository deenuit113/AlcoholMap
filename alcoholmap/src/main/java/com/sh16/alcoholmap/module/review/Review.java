package com.sh16.alcoholmap.module.review;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
@ToString
public class Review {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;

    private float starRate;

    private String content;

    private Date createDate;

    private int placeId;

    private String image;
}
