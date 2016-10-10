package com.example;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FileNetProfileRepository extends MongoRepository<FileNetProfile, String> {

    public FileNetProfile findByProfileName(String profileName);

}
