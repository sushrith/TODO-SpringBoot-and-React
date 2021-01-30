package com.sushrith.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoJpaResource {

	@Autowired
	private TodoHardCodedService todoService;

	@Autowired
	private TodoJpaRepository todoJpaRepository;
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaRepository.findByUsername(username);
	//return todoService.findAll(); 
	}
	
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Optional<Todo> getTodo(@PathVariable String username,@PathVariable int id){
		return todoJpaRepository.findById(id);
	//return todoService.findById(id); 
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username,@PathVariable long id,@RequestBody Todo todo) {
		todo.setUsername(username);
		Todo todo1=todoJpaRepository.save(todo);
	
		 return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	 	
	}
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Todo> createTodo(@PathVariable String username,@RequestBody Todo todo) {
	todo.setUsername(username);
		Todo todo1=todoJpaRepository.save(todo);
	URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todo1.getId()).toUri();
	return ResponseEntity.created(location).build();
	}
				
		
	
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username,@PathVariable int id) {
		 todoJpaRepository.deleteById(id);
		 
			 return ResponseEntity.noContent().build();
		
	 	 
	} 
}
