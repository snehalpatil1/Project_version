package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IVehicleBookingDao;
import com.app.pojos.Vehicle;
import com.app.pojos.VehicleBooking;

@Service // => class containing B.L
@Transactional // => automatic Tx management (done by spring supplied hibernate tx mgr
				// configured in hibernate-persistece.xml file
public class VehicleBookingServiceImple implements IVehicleBookingService {

	@Autowired // autowire=byType =>SC searches for any spring bean that has imple. IUserDao n
	// supplies it's instance
private IVehicleBookingDao dao;
	
	@Override
	public String addVehicleBooking(VehicleBooking v) {
		return dao.addVehicleBooking(v);
	}

	@Override
	public  List<VehicleBooking> getBooking() {
		return dao.getBooking();
	}

}
