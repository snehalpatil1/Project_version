package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	// add a method for user validation
	User validateUser(String email, String pass);
	
	public String registerUser(User u);
	
	public User login(String email, String pass);
	
	public List<User> listUsers();

	public User getUserById(int id);

	public String updateUserById(int id,String password);

	public String deleteUserById(int id);
}
