package com.sushrith.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/helloworld")
	public String helloWorld() {
		return "hello World sushrith..!!!";
	}
	
	@GetMapping("/helloWorldBean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("HelloWorldBean..!!");
	}
	
	@GetMapping("/helloworld/path-variable/{name}")
	public HelloWorldBean helloWorldBean1(@PathVariable String name) {
		
		//throw new RuntimeException("something went wrong..!!");
		return new HelloWorldBean("hello Mr."+name);
	}
	
}
