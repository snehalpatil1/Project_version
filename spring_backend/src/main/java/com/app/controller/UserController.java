package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.pojos.UserTypeId;
import com.app.service.IUserService;

@CrossOrigin
@RestController
@RequestMapping("/user") 
public class UserController {
	
	// dependency : service layer i/f
	@Autowired
	private IUserService service;

	@CrossOrigin
	@PostMapping(value="/register")
	public ResponseEntity<Void> registerUser(@RequestBody User u)
	{
		System.out.println("From Session-------------------");
		System.out.println(u);
		u.setTypeId(UserTypeId.CUSTOMER);
		service.registerUser(u);
		
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}


	@CrossOrigin
	@PostMapping(value="/login")
	public String loginUser(@RequestBody User user,HttpSession hs)
	{
		User u = service.login(user.getEmail(), user.getPassword());
		hs.setAttribute("validUser", u);
		return "success "+u.getTypeId();
		//return new User(u.getUserId(),u.getName(), u.getEmail(), u.getPassword(),u.getContactNumber(),u.getTypeId(),u.getAddressLine1(),u.getAddressLine2(),u.getCity(),u.getPincode(),u.getState(),u.isDisableUser());
	}
	
	
	
	
	@GetMapping(value="/uList")
	public List<User> listUsers()
	{
		List<User> usList = new ArrayList<User>();
		List<User>uList = service.listUsers();
		for (User u : uList) 
		{
			usList.add(new User(u.getUserId(),u.getName(), u.getEmail(), u.getPassword(),u.getContactNumber(),u.getTypeId(),u.getAddressLine1(),u.getAddressLine2(),u.getCity(),u.getPincode(),u.getState(),u.isDisableUser()));
		}
		return usList;
	}
	//update user by id 
	@PutMapping(value="/{id}")
	public String updateUserById(@RequestBody User detachedUser,@PathVariable int id)
	{
		System.out.println("id: "+id);
		System.out.println("password : "+detachedUser.getPassword());
		return service.updateUserById(id,detachedUser.getPassword());
	}
	@DeleteMapping(value="/{id}")
	public String deleteUserById(@PathVariable int id)
	{
		System.out.println("id: "+id);
		return service.deleteUserById(id);
	}
	
	@GetMapping(value="/{id}")
	public User getUserById(@PathVariable int id)
	{
		System.out.println("id : "+id);
		return service.getUserById(id);
	}
	
//	@DeleteMapping(value="/delete/{uid}",headers="Accept=application/json")
//	public ResponseEntity<Void> deleteUser(@PathVariable int uid)
//	{
//		service.deleteUser(uid);
//		return new ResponseEntity<Void>(HttpStatus.OK);
//	}
//	

//	// add req handling method(to service POST) : to process the form
//	@PostMapping("/login")
//	// In HandlerMapping bean :
//	// key : /user/login+method=POST
//	// value : com.app.controller.UserController.processLoginForm
//	// Which req params will be sent from the clnt ? email n pwd
//	public String processLoginForm(@RequestParam String email, @RequestParam(name = "password") String pwd, Model map)
//	// SC : String email=request.getParameter("email");
//	// String pwd=request.getParameter("password");
//	// RECO : Match req param names with method arg names!
//	{
//		System.out.println("in process login form " + email + " " + pwd);
//		try {
//			// invoke service layer method for user validation
//			User user = service.validateUser(email, pwd);
//			// => valid login
//			//add validated user details under model map , as model attribute --so that D.S will store it auto 
//			//under request scope.
//			map.addAttribute("user_details", user);
//			// role checking
//			if (user.getRole().equals(UserRole.ADMIN))
//				return "/admin/add_tut_form";//AVN : /WEB-INF/views/admin/add_tut_form.jsp
//			return "/customer/topics";// LVN : /customer/topics
//			// AVN : /WEB-INF/views/customer/topics.jsp
//
//		} catch (RuntimeException e) {
//			System.out.println("err in user controller " + e);
//			map.addAttribute("message", "Invalid Login , Please retry !!!!!!");
//			return "/user/login";// Actual View Name(AVN) : /WEB-INF/views/user/login.jsp
//		}
//
//	}
}
