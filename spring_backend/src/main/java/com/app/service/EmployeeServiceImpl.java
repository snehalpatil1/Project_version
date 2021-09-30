//package com.app.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dao.IEmployeeDao;
//import com.app.pojos.Employee;
//
//@Service // => class containing B.L
//@Transactional // => automatic Tx management (done by spring supplied hibernate tx mgr
//				// configured in hibernate-persistece.xml file
//public class EmployeeServiceImpl implements IEmployeeService {
//
//	@Autowired // autowire=byType =>SC searches for any spring bean that has imple. IUserDao n
//	// supplies it's instance
//private IEmployeeDao dao;
//	
//	@Override
//	public String addEmployee(Employee e) {
//		return dao.addEmployee(e);
//	}
//
//}
