package in.ksix.smda.service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.time.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import in.ksix.smda.model.User;
import in.ksix.smda.payload.response.MessageResponse;
import in.ksix.smda.repository.RoleRepository;
import in.ksix.smda.repository.UserRepository;

@Service
public class UserService {
	
	private static final long EXPIRE_TOKEN_AFTER_MINUTES = 30;
    
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	RoleRepository roleRepo;
	
	//get all users
	public List<User> getUsers(){
		
		return userrepo.findAll();
	}
	
    //getuserbyid
	public User getUserById(long id)
	{
		return userrepo.findById(id).orElse(null);
	}
	
	//getrolebyid
	public String getRoleById(long id) {
		String roleName = roleRepo.findByUserId(id);
		System.out.println("RoleName: " + roleName);
		return roleName;
	}
	
	//updateuser
	public User updateUser(User user)
	{
		User existingUser = userrepo.findById(user.getId()).orElse(null);
		if(existingUser == null) {
			System.out.println(user);
			return userrepo.save(user);
		}
		else {
		existingUser.setUsername(user.getUsername());
	    existingUser.setEmail(user.getEmail());
	     userrepo.save(existingUser);	
		}
		return user;
	
	}
	
	//delete userbyid
	 public boolean deleteUserByID(long id) {
	        User existinguser = userrepo.getById(id);
	        if(existinguser != null) {
	            userrepo.deleteById(id);
	            return true;
	        }
	        return false;
	    }

	 //delete alluser
	public String deleteUser() {

		userrepo.deleteAll();
		return "All Users Removed !!" ;
	}

	//searchbyusername
	public List<String> getUsersByUsernameSearch(String name) {
		List<String> searchUser = userrepo.findUserByUserNameSearch(name);
		return searchUser;
	}
	
	//userpagination
	public Page<User> getUserPagination(Integer pageNo, Integer pageSize) {
		Pageable pageable =  PageRequest.of(pageNo, pageSize); 
			return 	userrepo.findAll(pageable);
	}
	
	// generate token for resetpwd
	private String generateToken() {
		StringBuilder token = new StringBuilder();
		return token.append(UUID.randomUUID().toString()).append(UUID.randomUUID().toString()).toString();
	}

     //forgotpassword
	public String forgotPassword(String email) {
		Optional<User> userOptional = Optional.ofNullable(userrepo.Emailselection(email));
		String message=null;
		if (!userOptional.isPresent()) {
			message="Invalid user";
		}
		else{
			User user = userOptional.get();
			user.setReset_Token(generateToken());
			user.setToken_creation_date(LocalDateTime.now());
			user = userrepo.save(user);
			message=user.getReset_Token();
		}
		return message;
	}

	
	// Reset Password
	public String resetPassword(String reset_token, String password) {
		Optional<User> userOptional = Optional.ofNullable(userrepo.Tokenselection(reset_token));
		if (!userOptional.isPresent()) {
		}
		LocalDateTime tokenCreationDate = userOptional.get().getToken_creation_date();
		if (isTokenExpired(tokenCreationDate)) {
		}
        User user = userOptional.get();
        user.setPassword(password);
		user.setReset_Token(null);
		user.setToken_creation_date(null);
		userrepo.save(user);
		return "password updated Successfully";
	}
	
	//token expired 
	private boolean isTokenExpired(final LocalDateTime tokenCreationDate) {
		LocalDateTime now = LocalDateTime.now();
		Duration diff = Duration.between(tokenCreationDate, now);
		return diff.toMinutes() >= EXPIRE_TOKEN_AFTER_MINUTES;
	}
	
}
