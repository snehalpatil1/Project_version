package com.app.dao;

import java.util.List;

import com.app.pojos.Vehicle;
import com.app.pojos.VehicleBooking;

public interface IVehicleBookingDao {

	public String addVehicleBooking(VehicleBooking v);

	public  List<VehicleBooking> getBooking();

}
