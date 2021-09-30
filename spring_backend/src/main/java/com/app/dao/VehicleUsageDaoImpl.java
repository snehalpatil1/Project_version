package com.app.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.VehicleUsage;

@Repository
public class VehicleUsageDaoImpl implements IVehicleUsageDao{

	@Autowired // byType
	private SessionFactory sf;
	
	@Override
	public String addVehicleUsage(VehicleUsage vu) {
		return "Vehicle Usage added with ID " +sf.getCurrentSession().save(vu);
	}

}
