package com.iths.coffeemachineryAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iths.coffeemachineryAPI.domain.Coffee;
import com.iths.coffeemachineryAPI.domain.Customer;
import com.iths.coffeemachineryAPI.domain.CustomerOrder;
import com.iths.coffeemachineryAPI.repositories.CoffeeRepository;
import com.iths.coffeemachineryAPI.repositories.CustomerOrderRepository;
import com.iths.coffeemachineryAPI.repositories.CustomerRepository;

@Service
public class ServiceProvider {

	@Autowired
	private CoffeeRepository coffeeRepository;
	@Autowired
	private CustomerOrderRepository customerOrderRepository;
	@Autowired
	private CustomerRepository customerRepository;
	public List<Coffee> getAllCoffees() {
		return coffeeRepository.findAll();
	}
	public Customer getCustomer(Long id) {
		return customerRepository.getOne(id);
	}
	public Customer createNewCustomer(Customer newCustomer)  {
		Customer c = customerRepository.findByNameAndEmail(newCustomer.getName(), newCustomer.getEmail());
		if(c != null) {
			System.out.println("Customer already exists! " + c);
			return c;
		}
		else {			
			return customerRepository.saveAndFlush(newCustomer);
		}
		
		
	}
	public Customer updateCustomerOrders(Long id, CustomerOrder customerOrder) {
		Customer customer =  getCustomer(id);
		customer.getOrders().add(customerOrder);
		customerRepository.saveAndFlush(customer);
		return customer;
	}
	
}
