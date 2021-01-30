package com.sushrith.rest.webservices.restfulwebservices.helloworld;

public class AuthenticationBean {

	private String message;
	AuthenticationBean(){}
	public AuthenticationBean(String msg) {
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
