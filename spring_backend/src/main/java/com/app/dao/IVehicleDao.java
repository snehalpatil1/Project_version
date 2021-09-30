package com.app.dao;

import java.util.List;

import com.app.pojos.Vehicle;

public interface IVehicleDao {

	public List<Vehicle> listVehicle();

	public  String  addVehicle(Vehicle v);
}
