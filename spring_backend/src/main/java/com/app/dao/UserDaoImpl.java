
package com.app.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository // to tell SC : following class contains data access logic + enables exc
			// translation mechanism
public class UserDaoImpl implements IUserDao {
	// dependency : D.I
	@Autowired // byType
	private SessionFactory sf;

	@Override
	public User validateUser(String email, String pass) {
		String jpql="select u from User u where u.email=:em and u.password=:pass";
		
		return sf.getCurrentSession().
				createQuery(jpql, User.class).
				setParameter("em", email).
				setParameter("pass",pass).getSingleResult();
	}
	


	@Override
	public String registerUser(User u) 
	{
		return "User registered with ID " +sf.getCurrentSession().save(u);
	}

	@Override
	public User login(String email, String pass) 
	{
		String jpql = "select u from User u where u.email=:em and u.password=:ps";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", email).setParameter("ps", pass).getSingleResult();
	}

	@Override
	public List<User> listUser() 
	{
		
	String jpql = "select u from User u";
	return sf.getCurrentSession().createQuery(jpql, User.class).getResultList();
		
	}



	@Override
	public User getUserById(int userId) {
		String jpql = "select u from User u where u.userId=:id";
		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("id", userId).getSingleResult();
	}



	@Override
	public String  updateUserById(int id,String password) {
	//	String jpql = "update User u set u.password=:pass where u.email=:em";
		// sf.openSession();
		///Transaction tx3 = session3.beginTransaction();
		User u=sf.getCurrentSession().find(User.class, id);
		u.setPassword(password);
//		return sf.getCurrentSession().createQuery(jpql, User.class).setParameter("em", email).setParameter("pass", password).executeUpdate();
		return "updated successfully";
	}



	@Override
	public String deleteUserById(int id) {
//		User u=sf.getCurrentSession().find(User.class, id);
//		sf.getCurrentSession().remove(u);
//		Query query = sf.getCurrentSession().createQuery("delete User u where u.userId =:id");
////		query.setParameter("maxPrice", new Float(1000f));
		Query q = sf.getCurrentSession().createQuery("delete User u where u.userId =:id");
		
		q.setParameter("id",id);
		q.executeUpdate();
		//int result = query.executeUpdate();
		 
//		String jpql = "delete  User u where u.userId=:id";
//		int count= sf.getCurrentSession().createQuery(jpql, User.class).executeUpdate();
		 return "deleted successfully  ";
	}

}
