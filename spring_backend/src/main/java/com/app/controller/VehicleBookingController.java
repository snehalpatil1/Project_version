package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Vehicle;
import com.app.pojos.VehicleBooking;
import com.app.service.IVehicleBookingService;

@CrossOrigin
@RestController
@RequestMapping("/vehicleBooking") 
public class VehicleBookingController { 

	@Autowired
	private IVehicleBookingService service;

	@CrossOrigin
	@PostMapping(value="/addBooking")
	public ResponseEntity<Void> addBooking(@RequestBody VehicleBooking v)
	{
		System.out.println("From Session-------------------");
		System.out.println(v);
		//u.setTypeId(UserTypeId.DRIVER);
//		Vehicle c=v.getvId();
//		System.out.println(c);
		//student.setCourseEnrolled(course);
		//v.setvId(vId);
	//	int id=v.getvId();
	//	Vehicle id=vId;
		//System.out.println(vId);
		service.addVehicleBooking(v);
		
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@GetMapping(value="/vbList")
	public List<VehicleBooking> getBooking()
	{
		return service.getBooking();
	}
	
}
