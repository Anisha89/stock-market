package in.ksix.smda.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import in.ksix.smda.model.ERole;
import in.ksix.smda.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
  @Query(value="select name  from roles join user_roles on roles.id=user_roles.role_id where user_roles.user_id=:id",nativeQuery=true)
	String findByUserId(Long id);
}
