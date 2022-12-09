package in.ksix.smda.repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import in.ksix.smda.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	//public User findByEmailId(String email);

	//public User findByEmailIdAndPassword(String email, String password);

Optional<User> findByUsername(String username);
User getUserByUsername (String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
  
  //forgotpassword
  
  
  @Query(value = "select u from User u where u.email=:email")
	public User Emailselection(@Param("email") String email);

 

  @Query(value = "select users.id,users.username,users.email,roles.name  from roles join user_roles on roles.id=user_roles.role_id join users on users.id = user_roles.user_id  where username like %:name%", nativeQuery = true)
	List<String> findUserByUserNameSearch(String name);

//reset password
	@Query(value = "select u from User u where u.reset_Token=:reset_token")
	public User Tokenselection(@Param("reset_token") String reset_Token);

 
  
}
