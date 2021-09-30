package com.app.service;

import java.util.List;

import com.app.pojos.Vehicle;

public interface IVehicleService {

	public List<Vehicle> listVehicles();

	public String addVehicle(Vehicle v);
}
