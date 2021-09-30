package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	
	@Column(length=18)
	private String name;
	@Column(length=20,unique=true)
	private String email;
	@Column(length=12)
	private String password;
	@Column(length=14)
	private String contactNumber;

	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private UserTypeId typeId;

	@Column(length=60)
	private String addressLine1;
	@Column(length=60)
	private String addressLine2;
	@Column(length=30)
	private String city;
	@Column(length=10)
	private int pincode;
	@Column(length=15)
	private String state;

	

	@Column(columnDefinition = "boolean default true", nullable = false)
	private boolean disableUser;

	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "usageId", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "vehicleUsage")
    private List<VehicleUsage> vehicleUsage = new ArrayList<VehicleUsage>();
	public User() {

		System.out.println("in default constructor of " + getClass().getName());
	}
	public User(int userId, String name, String email, String password, String contactNumber, UserTypeId typeId,
			String addressLine1, String addressLine2, String city, int pincode, String state, boolean disableUser) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.contactNumber = contactNumber;
		this.typeId = typeId;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.pincode = pincode;
		this.state = state;
		this.disableUser = disableUser;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public UserTypeId getTypeId() {
		return typeId;
	}
	public void setTypeId(UserTypeId typeId) {
		this.typeId = typeId;
	}
	public String getAddressLine1() {
		return addressLine1;
	}
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	public String getAddressLine2() {
		return addressLine2;
	}
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public boolean isDisableUser() {
		return disableUser;
	}
	public void setDisableUser(boolean disableUser) {
		this.disableUser = disableUser;
	}
	public List<VehicleUsage> getVehicleUsage() {
		return vehicleUsage;
	}
	public void setVehicleUsage(List<VehicleUsage> vehicleUsage) {
		this.vehicleUsage = vehicleUsage;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", contactNumber=" + contactNumber + ", typeId=" + typeId + ", addressLine1=" + addressLine1
				+ ", addressLine2=" + addressLine2 + ", city=" + city + ", pincode=" + pincode + ", state=" + state
				+ ", disableUser=" + disableUser + ", vehicleUsage=" + vehicleUsage + "]";
	}

	

}
