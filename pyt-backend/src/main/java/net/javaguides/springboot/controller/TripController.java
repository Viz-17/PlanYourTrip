package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.exception.NotFoundException;
import net.javaguides.springboot.model.Book;
import net.javaguides.springboot.model.SignUp;
import net.javaguides.springboot.model.Trip;
import net.javaguides.springboot.repository.BookingRespository;
import net.javaguides.springboot.repository.SignUpRepository;
import net.javaguides.springboot.repository.TripRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")

public class TripController {

	@Autowired
	private TripRepository packageRepository;
	@Autowired
	private SignUpRepository signRepository;
	@Autowired
	private BookingRespository booktrip;

	// login
	@PostMapping("/packages/home/login")
	public ResponseEntity<?> login(@RequestBody SignUp g) throws Exception {

		SignUp s = signRepository.findById(g.getName()).orElse(null);

		if (s != null && s.getPassword().equals(g.getPassword())) {
			return ResponseEntity.ok(s);
		} else {
			throw new Exception("invalid details");
		}
	}

	// sign-up
	@PostMapping("/packages/home/signup")
	public void signup(@RequestBody SignUp su) {
		signRepository.save(su);
	}

	// book
	@PostMapping("/packages/home/book")
	public Book tripBook(@RequestBody Book book) {
		return booktrip.save(book);
	}

	// show all packages
	@GetMapping("/packages/admin")
	public List<Trip> getallPackages() {

		return packageRepository.findAll();
	}

	// create package
	@PostMapping("/packages/admin")
	public Trip createTrip(@RequestBody Trip trip) {
		return packageRepository.save(trip);

	}

	// get package with id
	@GetMapping("/packages/admin/{id}")
	public ResponseEntity<Trip> getTripById(@PathVariable long id) {
		Trip t = packageRepository.findById(id).orElseThrow(() -> new NotFoundException(id + " not exist"));
		return ResponseEntity.ok(t);
	}

	// update package
	@PutMapping("/packages/admin/{id}")
	public ResponseEntity<Trip> updateTrip(@PathVariable long id, @RequestBody Trip packageDetails) {
		Trip t = packageRepository.findById(id).orElseThrow(() -> new NotFoundException(id + " not exist"));

		t.setPackage_name(packageDetails.getPackage_name());
		t.setDays(packageDetails.getDays());
		t.setCost(packageDetails.getCost());

		Trip updatedTrip = packageRepository.save(t);
		return ResponseEntity.ok(updatedTrip);
	}

	// delete package
	@DeleteMapping("/packages/admin/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTrip(@PathVariable long id) {
		Trip t = packageRepository.findById(id).orElseThrow(() -> new NotFoundException(id + " not exist"));
		packageRepository.delete(t);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
