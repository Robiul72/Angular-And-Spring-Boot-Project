package com.restApiProject.restApiProject.repository;

import com.restApiProject.restApiProject.model.OwnerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepo extends JpaRepository<OwnerModel, Integer> {
}
