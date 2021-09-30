//package com.app.dao;
//
//import org.hibernate.SessionFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//import com.app.pojos.Employee;
//
//@Repository // to tell SC : following class contains data access logic + enables exc
//// translation mechanism
//public class EmployeeDaoImpl implements IEmployeeDao{
//
//	@Autowired // byType
//	private SessionFactory sf;
//	
//	@Override
//	public String addEmployee(Employee e) {
//		return "Employee registered with ID " +sf.getCurrentSession().save(e);
//	}
//
//
//
//}
