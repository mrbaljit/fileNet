package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FileNetApplication implements CommandLineRunner {

	@Autowired
	private ProfileRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(FileNetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save a couple of customers
		repository.save(new Profile("Alice", "1", "2"));
		repository.save(new Profile("Bob", "3", "4"));

		// fetch all customers
		System.out.println("Customers found with findAll():");
		System.out.println("-------------------------------");
		for (Profile profile : repository.findAll()) {
			System.out.println(profile);
		}
		System.out.println();

		// fetch an individual customer
		/*System.out.println("Customer found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByProfileName("Alice"));
*/
		/*System.out.println("Customers found with findByLastName('Smith'):");
		System.out.println("--------------------------------");
		for (Profile profile : repository.findByProfileName("Smith")) {
			System.out.println(profile);
		}
*/
	}

}
