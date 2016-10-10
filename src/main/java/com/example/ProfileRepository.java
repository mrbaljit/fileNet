package com.example;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProfileRepository extends MongoRepository<Profile, String> {

    public List<Profile> findByProfileName(String profileName);

}
