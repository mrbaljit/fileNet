package co.nz.suncorp;

import co.nz.suncorp.domain.FileNetProfile;
import co.nz.suncorp.repository.FileNetProfileRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class FileNetApplication implements CommandLineRunner {

	@Autowired
	private FileNetProfileRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(FileNetApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

//		repository.deleteAll();

		// save a couple of customers
//		repository.save(new FileNetProfile("Alice", "1", "2"));
//		repository.save(new FileNetProfile("Bob", "3", "4"));

		// fetch all customers
		System.out.println("FileNet found with findAll():");
		System.out.println("-------------------------------");
		for (FileNetProfile profile : repository.findAll()) {
			System.out.println(profile);
		}
		System.out.println();

		System.out.println(repository.findByProfileName("wwe"));

		// fetch an individual customer
		/*System.out.println("FileNet found with findByFirstName('Alice'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByProfileName("Alice"));
*/
		/*System.out.println("FileNet found with findByLastName('Smith'):");
		System.out.println("--------------------------------");
		for (Profile profile : repository.findByProfileName("Smith")) {
			System.out.println(profile);
		}
*/
	}

}
