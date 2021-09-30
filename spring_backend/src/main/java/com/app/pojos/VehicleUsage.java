package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
public class VehicleUsage {

	// primary key
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="usId")
	private int usageId;

//	// foreign key
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="vId")
//	private Vehicle vId;

	// foreign key
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="userId")
//	private User userId;

	@Column(length=10)
	private String status;

	@Column(length=5)
	private int unitCharge;

	@Column(length=5)
	private int usageUnits;

	@Column(length=14)
	private int total;

	public VehicleUsage() {

		System.out.println("in default constructor of " + getClass().getName());
	}

	public VehicleUsage(int usageId, String status, int unitCharge, int usageUnits, int total) {
		super();
		this.usageId = usageId;
		this.status = status;
		this.unitCharge = unitCharge;
		this.usageUnits = usageUnits;
		this.total = total;
	}

	public int getUsageId() {
		return usageId;
	}

	public void setUsageId(int usageId) {
		this.usageId = usageId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getUnitCharge() {
		return unitCharge;
	}

	public void setUnitCharge(int unitCharge) {
		this.unitCharge = unitCharge;
	}

	public int getUsageUnits() {
		return usageUnits;
	}

	public void setUsageUnits(int usageUnits) {
		this.usageUnits = usageUnits;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "VehicleUsage [usageId=" + usageId + ", status=" + status + ", unitCharge=" + unitCharge
				+ ", usageUnits=" + usageUnits + ", total=" + total + "]";
	}

	
}
