package com.iths.coffeemachineryAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iths.coffeemachineryAPI.domain.Coffee;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {

}
