package net.javaguides.springboot.model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table(name="booking_details")

public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
	@Column(name="Name")
	private String yourname;

	@Column(name="place")
	private String place;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="no_of_people")
	private long nop;
	
	public Book() {
	}
	
	public Book(String yourname, String place, Date date, long nop)
	{
		super();
		this.yourname = yourname;
		this.place = place;
		this.date = date;
		this.nop = nop;
	}

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getYourname() {
		return yourname;
	}

	public void setYourname(String yourname) {
		this.yourname = yourname;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public long getNop() {
		return nop;
	}

	public void setNop(long nop) {
		this.nop = nop;
	}
	
	

}
