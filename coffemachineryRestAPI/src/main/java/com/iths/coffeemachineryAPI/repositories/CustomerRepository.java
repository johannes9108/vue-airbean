package com.iths.coffeemachineryAPI.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.iths.coffeemachineryAPI.domain.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	@Query("SELECT DISTINCT c FROM Customer c WHERE name = ?1 AND email = ?2")
    Customer findByNameAndEmail(String name, String email);
}
