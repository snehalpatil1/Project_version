package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserDao;
import com.app.pojos.User;

@Service // => class containing B.L
@Transactional // => automatic Tx management (done by spring supplied hibernate tx mgr
				// configured in hibernate-persistece.xml file
public class UserServiceImpl implements IUserService {
	// dependency
	@Autowired // autowire=byType =>SC searches for any spring bean that has imple. IUserDao n
				// supplies it's instance
	private IUserDao dao;

	@Override
	public User validateUser(String email, String pass) {
		// TODO Auto-generated method stub
		return dao.validateUser(email, pass);
	}

	//private Random random = new Random(); 

	@Override
	public String registerUser(User u) {
		return dao.registerUser(u);
	}

	@Override
	public User login(String email, String pass) {
		return dao.login(email, pass);
	}

	@Override
	public List<User> listUsers() {
		return dao.listUser();
	}

	@Override
	public User getUserById(int id) {
		return dao.getUserById(id);
	}

	@Override
	public String updateUserById(int id,String password) {
		return dao.updateUserById(id,password);
	}

	@Override
	public String deleteUserById(int id) {
		return dao.deleteUserById(id);
	}

	
}
