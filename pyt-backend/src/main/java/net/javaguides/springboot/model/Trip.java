package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="packages")
public class Trip {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="package_name")
	private String package_name;
	
	@Column(name="cost")
	private String cost;
	
	@Column(name="no_of_days")
	private String days;
	
	public Trip() { 
		 
	}
	
	public Trip(String package_name, String cost, String days) {
		super();
		this.package_name = package_name;
		this.cost = cost;
		this.days = days;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
		
	public String getPackage_name() {
		return package_name;
	}

	public void setPackage_name(String package_name) {
		this.package_name = package_name;
	}

	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
}
