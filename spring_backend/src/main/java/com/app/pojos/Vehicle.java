package com.app.pojos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

@Entity
public class Vehicle {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="vId")
	private int vId;

	@Column(length=30)
	@Enumerated(EnumType.STRING)
	private VehicleType type;

	@Column(length=20,unique = true)
	private String chessisNumber;

	@Column(length=4)
	private int modelYear;


	@OneToMany(fetch = FetchType.EAGER, mappedBy = "bookingId", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "vehicleBooking")
    private List<VehicleBooking> vehicleBooking = new ArrayList<VehicleBooking>();
	
	
	
	

	
	@Column(columnDefinition = "boolean default true", nullable = false)
	private Boolean active = true;

	public Vehicle() {

		System.out.println("in default constructor of " + getClass().getName());
	}

	public Vehicle(int vId, VehicleType type, String chessisNumber, int modelYear, Boolean active) {
		super();
		this.vId = vId;
		this.type = type;
		this.chessisNumber = chessisNumber;
		this.modelYear = modelYear;
		this.active = active;
	}

	public int getvId() {
		return vId;
	}

	public void setvId(int vId) {
		this.vId = vId;
	}

	public VehicleType getType() {
		return type;
	}

	public void setType(VehicleType type) {
		this.type = type;
	}

	public String getChessisNumber() {
		return chessisNumber;
	}

	public void setChessisNumber(String chessisNumber) {
		this.chessisNumber = chessisNumber;
	}

	public int getModelYear() {
		return modelYear;
	}

	public void setModelYear(int modelYear) {
		this.modelYear = modelYear;
	}

	public List<VehicleBooking> getVehicleBooking() {
		return vehicleBooking;
	}

	public void setVehicleBooking(List<VehicleBooking> vehicleBooking) {
		this.vehicleBooking = vehicleBooking;
	}


	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Vehicle [vId=" + vId + ", type=" + type + ", chessisNumber=" + chessisNumber + ", modelYear="
				+ modelYear + ", vehicleBooking=" + vehicleBooking +  ", active="
				+ active + "]";
	}

	
	
}
