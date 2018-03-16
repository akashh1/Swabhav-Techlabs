package com.techlabs.guitar;

public class Guitar {

	private String serialNumber;
	private double price;
	private GuitarSpec spec;
	
	public String getSerialNumber() {
		return serialNumber;
	}

	public double getPrice() {
		return price;
	}

	public GuitarSpec getSpec() {
		return spec;
	}

	public Guitar(String serialNumber,double price,GuitarSpec spec){
		
		this.serialNumber=serialNumber;
		this.price=price;
		this.spec=spec;
	}
}
