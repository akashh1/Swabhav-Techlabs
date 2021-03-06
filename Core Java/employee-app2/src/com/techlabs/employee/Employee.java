package com.techlabs.employee;


public class Employee {

	private String id;
	private String name;
	private String designation;
	private String salary;
	private String joiningDate;
	private String dearnessAllownce;
	private String departments;
	
	public Employee(String id,String name,String designstion,String salary,String birthDate,String dearnessAllowance,String workingDays){
		this.id=id;
		this.name=name;
		this.salary=salary;
		this.designation=designstion;
		this.joiningDate=birthDate;
		this.dearnessAllownce=dearnessAllowance;
		this.departments=workingDays;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getDesignation() {
		return designation;
	}

	public String getSalary() {
		return salary;
	}

	public String getBirthDate() {
		return joiningDate;
	}

	public String getDearnessAllownce() {
		return dearnessAllownce;
	}

	public String getWorkingDays() {
		return departments;
	}
	

	@Override
	public String toString()
	{
		return getId()+  ","  +getName()+  ","  +getDesignation()+  ","  +getSalary()+  ","  +getBirthDate()+  ","  +getDearnessAllownce()+
	 			 ","  +getWorkingDays();
	}
}
