package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;
import com.app.pojos.Vehicle;

@Repository
public class VehicleDaoImpl implements IVehicleDao{

	@Autowired // byType
	private SessionFactory sf;

	
	@Override
	public List<Vehicle> listVehicle() {
		String jpql = "select v from Vehicle v";
		return sf.getCurrentSession().createQuery(jpql, Vehicle.class).getResultList();
			
	}


	@Override
	public String addVehicle(Vehicle v) {
		return "Vehicle registered with ID " +sf.getCurrentSession().save(v);
		
	}
	

}
