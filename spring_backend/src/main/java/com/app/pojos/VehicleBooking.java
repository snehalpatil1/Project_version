package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class VehicleBooking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bId")
	private int bookingId;
	
	//foriegn key
	//private int vId;
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="vId",nullable = false)
//	@JsonIgnore
//	private Vehicle vId;
	
	
	@Column(length=30)
	private String fromPlace;
	
	@Column(length=30)
	private String toPlace; 

	public VehicleBooking() {

		System.out.println("in default constructor of " + getClass().getName());
	}

	public VehicleBooking(int bookingId, String fromPlace, String toPlace) {
		super();
		this.bookingId = bookingId;
		this.fromPlace = fromPlace;
		this.toPlace = toPlace;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	

	public String getFromPlace() {
		return fromPlace;
	}

	public void setFromPlace(String fromPlace) {
		this.fromPlace = fromPlace;
	}

	public String getToPlace() {
		return toPlace;
	}

	public void setToPlace(String toPlace) {
		this.toPlace = toPlace;
	}

	@Override
	public String toString() {
		return "VehicleBooking [bookingId=" + bookingId +  ", fromPlace=" + fromPlace + ", toPlace="
				+ toPlace + "]";
	}

	
	
}
