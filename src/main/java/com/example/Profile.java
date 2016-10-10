package com.example;

import org.springframework.data.annotation.Id;


public class Profile {

    @Id
    public String id;

    public String profileName;
    public String sourceRepository;
    public String targetRepository;

    public Profile() {}

    public Profile(String profileName, String sourceRepository, String targetRepository) {
        this.profileName = profileName;
        this.sourceRepository = sourceRepository;
        this.targetRepository = targetRepository;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, profileName='%s', sourceRepository='%s' , targetRepository='%s']",
                id, profileName, sourceRepository ,targetRepository);
    }

}

