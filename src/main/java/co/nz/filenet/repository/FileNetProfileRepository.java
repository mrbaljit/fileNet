package co.nz.filenet.repository;

import co.nz.filenet.domain.FileNetProfile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileNetProfileRepository extends MongoRepository<FileNetProfile, String> {

    public FileNetProfile findByProfileName(String profileName);

    public FileNetProfile findById(String id);

}
