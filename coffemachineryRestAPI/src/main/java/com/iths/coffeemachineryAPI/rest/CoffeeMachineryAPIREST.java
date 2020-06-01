package com.iths.coffeemachineryAPI.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.ServerRequest.Headers;

import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.iths.coffeemachineryAPI.domain.Coffee;
import com.iths.coffeemachineryAPI.domain.Customer;
import com.iths.coffeemachineryAPI.domain.CustomerOrder;
import com.iths.coffeemachineryAPI.service.ServiceProvider;


@RestController
@RequestMapping("/")
@CrossOrigin
public class CoffeeMachineryAPIREST {

	@Autowired
	private ServiceProvider serviceProvider;
	
	@GetMapping(path = "coffee",produces = "application/json")
	public ResponseEntity<List<Coffee>> getAllCoffees() {
		List<Coffee> coffees = serviceProvider.getAllCoffees();
		return new ResponseEntity<List<Coffee>>(coffees, HttpStatus.OK);
	}
	
	@GetMapping(path= "customer/{id}",produces = "application/json")
	public Customer getCustomer(@PathVariable("id") int id) {
		Customer customer = serviceProvider.getCustomer(Integer.toUnsignedLong(id));
//		List<Coffee> coffees = serviceProvider.getAllCoffees();
//		return new ResponseEntity<List<Coffee>>(coffees, HttpStatus.OK);
		return customer;
	}
	
	
	@PostMapping(path="customer", consumes="application/json", produces="application/json")
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer newCustomer){
		System.out.println("Body: " + newCustomer);
		Customer customer = serviceProvider.createNewCustomer(newCustomer);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	@PutMapping(path="customer/{id}", consumes="application/json")
	public ResponseEntity<Customer> updateCustomerOrders(@RequestBody CustomerOrder customerOrder, @PathVariable("id") int id){
		Customer customer = serviceProvider.updateCustomerOrders(Integer.toUnsignedLong(id), customerOrder);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	
	
	

	
	
	
	
	
}
