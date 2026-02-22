package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Book;

@Repository

public interface BookingRespository extends JpaRepository<Book, String>{

} 
