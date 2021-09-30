//package com.app.pojos;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.MapsId;
//import javax.persistence.PrimaryKeyJoinColumn;
//
//@Entity
//public class Employee extends User {
//
//	// primary key
//	@MapsId
//	private int empId;
//
//	@Column(length = 12, unique = true)
//	private String aadharNumber;
//
//	@Column(length = 8)
//	private int salary;
//
//
//
//	public Employee() {
//
//		System.out.println("in default constriuctor of " + getClass().getName());
//	}
//
//	public Employee( String aadharNumber, int salary, int typeId) {
//	
//		
//		this.aadharNumber = aadharNumber;
//		this.salary = salary;
//	}
//
//
//
//	public String getAadharNumber() {
//		return aadharNumber;
//	}
//
//	public void setAadharNumber(String aadharNumber) {
//		this.aadharNumber = aadharNumber;
//	}
//
//	public int getSalary() {
//		return salary;
//	}
//
//	public void setSalary(int salary) {
//		this.salary = salary;
//	}
//
//
//
//	@Override
//	public String toString() {
//		return "Employee [ aadharNumber=" + aadharNumber + ", salary=" + salary + ", typeId="
//				+ "]";
//	}
//
//}
