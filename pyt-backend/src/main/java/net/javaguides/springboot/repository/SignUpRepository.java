package net.javaguides.springboot.repository;

import javax.persistence.PersistenceContext;
import org.springframework.data.jpa.repository.JpaRepository;
import net.javaguides.springboot.model.SignUp;

@PersistenceContext
public interface SignUpRepository extends JpaRepository<SignUp, String>{

}
