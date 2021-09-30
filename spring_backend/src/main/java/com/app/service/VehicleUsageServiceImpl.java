package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IVehicleUsageDao;
import com.app.pojos.VehicleUsage;

@Service // => class containing B.L
@Transactional // => automatic Tx management (done by spring supplied hibernate tx mgr
				// configured in hibernate-persistece.xml file
public class VehicleUsageServiceImpl implements IVehicleUsageService {

	@Autowired // autowire=byType =>SC searches for any spring bean that has imple. IUserDao n
	// supplies it's instance
private IVehicleUsageDao dao;
	@Override
	public String addVehicleUsage(VehicleUsage vu) {
		return dao.addVehicleUsage(vu);
	}

}
