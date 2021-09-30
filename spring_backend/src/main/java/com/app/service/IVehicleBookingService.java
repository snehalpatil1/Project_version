package com.app.service;

import java.util.List;

import com.app.pojos.Vehicle;
import com.app.pojos.VehicleBooking;

public interface IVehicleBookingService {

	public String addVehicleBooking(VehicleBooking v);

	public  List<VehicleBooking> getBooking();

}
