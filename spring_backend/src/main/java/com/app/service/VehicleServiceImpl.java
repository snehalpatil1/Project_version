package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IVehicleDao;
import com.app.pojos.User;
import com.app.pojos.Vehicle;


@Service // => class containing B.L
@Transactional // => automatic Tx management (done by spring supplied hibernate tx mgr
				// configured in hibernate-persistece.xml file
public class VehicleServiceImpl implements IVehicleService {

	@Autowired // autowire=byType =>SC searches for any spring bean that has imple. IUserDao n
	// supplies it's instance
private IVehicleDao dao;
	
	@Override
	public List<Vehicle> listVehicles() {
		return dao.listVehicle();
	}

	@Override
	public String addVehicle(Vehicle v) {
		return dao.addVehicle(v);
		
	}

	
	
}
