package com.restApiProject.restApiProject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "house_Table")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class HouseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    private String houseName;
    private String houseLocation;
    private String houseBedroom;
    private String houseUnit;
    private String houseFloor;

    @ManyToOne
    @JoinColumn(name="owner_id")
    OwnerModel owner_Name;

}
