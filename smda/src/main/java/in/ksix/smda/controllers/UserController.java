package in.ksix.smda.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import in.ksix.smda.model.User;
import in.ksix.smda.repository.UserRepository;
import in.ksix.smda.service.UserService;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {
	


@Autowired 
private UserService userservice;
@Autowired
UserRepository userrepo;

@Autowired
PasswordEncoder encoder;

//get All users

@GetMapping("/users")
public List<User> getUsers() {
	return userservice.getUsers();
}


//get user by id
@GetMapping("/users/{id}")
public User getUserById(@PathVariable long id)
{
	return userservice.getUserById(id);
}




//Update User by id

@PutMapping("/users")
public User updateUser(@RequestBody User user)
{
return userservice.updateUser(user);
}



	
// Delete employee
@DeleteMapping("/users/{id}")
public boolean deleteUserByID(@PathVariable long id) {
    return userservice.deleteUserByID(id);
}

// Delete All Users
@DeleteMapping("/users")

//@PreAuthorize("hasAuthority('ROLE_ADMIN')")

public String deleteUser()
{
	return userservice.deleteUser();
	
}




//userList pagination
@GetMapping("/user/{pageNo}/{pageSize}")
public Page<User> userDatailpagination(@PathVariable Integer pageNo,@PathVariable Integer pageSize ){
	return userservice.getUserPagination(pageNo, pageSize);
}


@PostMapping("/users")
public User changePassword(@RequestBody User user)
	{		
	
	String UserName=user.getUsername();
	String oldPassword = user.getPassword();

 User currentUser = this.userrepo.getUserByUsername(UserName);

	String CurrentPassword=currentUser.getPassword();
	
	    
	if(this.encoder.matches(oldPassword, CurrentPassword))
	{
		//Change the Password
		
		currentUser.setPassword(this.encoder.encode(user.getNewpassword()));
		return this.userrepo.save(currentUser);			
	
	}
	return currentUser;
	
    
}


  
}
	
	
	
