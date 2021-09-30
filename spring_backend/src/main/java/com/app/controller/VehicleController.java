package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.pojos.UserTypeId;
import com.app.pojos.Vehicle;
import com.app.pojos.VehicleType;
import com.app.service.IVehicleService;

@CrossOrigin
@RestController
@RequestMapping("/vehicle") // optional
public class VehicleController {
	
	@Autowired
	private IVehicleService service;

	@PostMapping(value="/addVehicle")
	public ResponseEntity<Void> registerVehicle(@RequestBody Vehicle v)
	{
		System.out.println("From Session-------------------");
		System.out.println(v);
		v.setType(VehicleType.SEDAN);
		service.addVehicle(v);
		
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@GetMapping(value="/vList")
	public List<Vehicle> listUsers()
	{
		List<Vehicle> vhList = new ArrayList<Vehicle>();
		List<Vehicle>vList = service.listVehicles();
		for (Vehicle v : vhList) 
		{
			//int vehicleId, VehicleType type, String chessisNumber, int modelYear, byte[] vImage,
			//boolean disableVehicle
			//
			vList.add(new Vehicle(v.getvId(),v.getType(), v.getChessisNumber(), v.getModelYear(),v.getActive()));
		}
		return vList;
	}
	
}
