package in.ksix.smda.model;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;
  private String newpassword;
  private String currentpassword;
  


private String reset_Token;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();
  @CreationTimestamp
  
  
 	private Date date;

private LocalDateTime token_creation_date;

  public LocalDateTime getToken_creation_date() {
	return token_creation_date;
}

public Date getDate() {
	return date;
}

public void setDate(Date date) {
	this.date = date;
}

public User() {
  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

public String getReset_Token() {
	return reset_Token;
}

public void setReset_Token(String reset_Token) {
	this.reset_Token = reset_Token;
}
public void setToken_creation_date(LocalDateTime token_creation_date) {
	this.token_creation_date = token_creation_date;
}


public String getNewpassword() {
	// TODO Auto-generated method stub
	return newpassword;
}

public void setNewpassword(String newpassword) {
	this.newpassword = newpassword;
}

public String getCurrentpassword() {
	return currentpassword;
}

public void setCurrentpassword(String currentpassword) {
	this.currentpassword = currentpassword;
}
}
