package com.example;

/**
 * Created by u342597 on 10/10/2016.
 */
public class ProfileViewModel {

    private String profileId;
    private String profileName;
    private String targetRepository;
    private String sourceRepository;

    public String getSourceRepository() {
        return sourceRepository;
    }

    public void setSourceRepository(String sourceRepository) {
        this.sourceRepository = sourceRepository;
    }

    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public String getTargetRepository() {
        return targetRepository;
    }

    public void setTargetRepository(String targetRepository) {
        this.targetRepository = targetRepository;
    }


}
