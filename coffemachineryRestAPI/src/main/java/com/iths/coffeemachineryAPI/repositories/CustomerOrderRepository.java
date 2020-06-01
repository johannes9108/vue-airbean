package com.iths.coffeemachineryAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iths.coffeemachineryAPI.domain.CustomerOrder;

public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Long> {

}
