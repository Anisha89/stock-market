package in.ksix.smda.controllers;

import java.util.HashSet;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import in.ksix.smda.model.ERole;
import in.ksix.smda.model.Role;
import in.ksix.smda.model.User;
import in.ksix.smda.payload.request.LoginRequest;
import in.ksix.smda.payload.request.SignupRequest;
import in.ksix.smda.payload.response.JwtResponse;
import in.ksix.smda.payload.response.MessageResponse;
import in.ksix.smda.repository.RoleRepository;
import in.ksix.smda.repository.UserRepository;
import in.ksix.smda.security.jwt.JwtUtils;
import in.ksix.smda.security.services.UserDetailsImpl;
import in.ksix.smda.service.UserService;
import in.ksix.smda.service.EmailService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;
  
  @Autowired
  private UserService service; 
  
  
  @Autowired
  private EmailService emailService;

  @PostMapping("/login")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    
    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    return ResponseEntity.ok(new JwtResponse(jwt, 
                         userDetails.getId(), 
                         userDetails.getUsername(), 
                         userDetails.getEmail(), 
                         roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), 
                         signUpRequest.getEmail(),
           encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>();

      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "user":
          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);

          break;
          
        default:
          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);
        }
      });
    

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
  
  
  @RequestMapping(value = {"/logout"}, method = RequestMethod.GET)
  public String logoutDo(HttpServletRequest request,HttpServletResponse response){
  HttpSession session= request.getSession(false);
      SecurityContextHolder.clearContext();
           session= request.getSession(false);
          if(session != null) {
              session.invalidate();
          }
          

      return "logout successfully";
  }
  
  
 // forgotpassword

	@PostMapping("/forgotpassword")
	public ResponseEntity<?> forgot(@RequestBody User user) {
		  ResponseEntity<MessageResponse> responsemsg=null;
	      String email = user.getEmail();
         String response = service.forgotPassword(email);
		if (!response.startsWith("Invalid")) {
			response = "http://localhost:4200/resetpassword?token=" + response;
			try {
				emailService.sendMail(email, "Reset Password", response);
			} catch (MessagingException e) {

				e.printStackTrace();
			}
			  return  responsemsg=ResponseEntity.ok(new MessageResponse("password reset token send successfully to user " + email));
			    } 
		
		

		return responsemsg;

		
	}
	
	@PutMapping("/resetpassword")
	public ResponseEntity<?>  resetPassword(@RequestParam String token, @RequestBody User user) {
		//User use1 = new User();
		String password = encoder.encode(user.getPassword());
		service.resetPassword(token, password);
	    return ResponseEntity.ok(new MessageResponse("password updated Successfully"));
	}

}
