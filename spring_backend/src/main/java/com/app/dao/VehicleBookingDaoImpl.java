package com.app.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;
import com.app.pojos.Vehicle;
import com.app.pojos.VehicleBooking;

@Repository // to tell SC : following class contains data access logic + enables exc
// translation mechanism
public class VehicleBookingDaoImpl implements IVehicleBookingDao{

	@Autowired // byType
	private SessionFactory sf;
	
	@Override
	public String addVehicleBooking(VehicleBooking v) {
		System.out.println("v: "+v.toString());
		//v.setvId(vId);
		//v.setvId(vId);
		//String jpql = "select u from Vehicle u where u.vId=:vId";
		// Vehicle ve=sf.getCurrentSession().createQuery(jpql, Vehicle.class).setParameter("vId", vId).getSingleResult();
		System.out.println(v);
		
	sf.getCurrentSession().save(v);;
	return "Vehicle registered ";
	}

	@Override
	public List<VehicleBooking> getBooking() {
		String jpql = "select v from VehicleBooking v";
		
		return sf.getCurrentSession().createQuery(jpql, VehicleBooking.class).getResultList();
		
	}

}
