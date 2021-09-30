//package com.app.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.pojos.Employee;
//import com.app.service.IEmployeeService;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/employee")
//public class EmployeeController {
//
//	@Autowired
//	private IEmployeeService service;
//	
//	@PostMapping(value="/addEmployee")
//	public ResponseEntity<Void> addEmployee(@RequestBody Employee e)
//	{
//		System.out.println("From Session-------------------");
//		System.out.println(e);
//		service.addEmployee(e);
//		
//		return new ResponseEntity<Void>(HttpStatus.CREATED);
//	}
//}
