package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.VehicleUsage;
import com.app.service.IVehicleUsageService;

@CrossOrigin
@RestController
@RequestMapping("/vehicleUsage") 
public class VehicleUsageController {

	@Autowired
	private IVehicleUsageService service;
	
	
	@PostMapping(value="/addUsage")
	public ResponseEntity<Void> registerVehicle(@RequestBody VehicleUsage vu)
	{
		System.out.println("From Session-------------------");
		System.out.println(vu);
		service.addVehicleUsage(vu);
		
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
}
