package com.sushrith.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

	private String message;
	HelloWorldBean(){}
	public HelloWorldBean(String msg) {
		this.message=msg;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "[message=" + message + "]";
	}
	
}
