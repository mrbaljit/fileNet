package co.nz.suncorp.repository;

import co.nz.suncorp.domain.FileNetProfile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileNetProfileRepository extends MongoRepository<FileNetProfile, String> {

    public FileNetProfile findByProfileName(String profileName);

    public FileNetProfile findById(String id);

}
