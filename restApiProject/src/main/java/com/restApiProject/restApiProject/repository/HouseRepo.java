package com.restApiProject.restApiProject.repository;

import com.restApiProject.restApiProject.model.HouseModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepo extends JpaRepository <HouseModel, Integer> {
//    void delete(int id);
}
