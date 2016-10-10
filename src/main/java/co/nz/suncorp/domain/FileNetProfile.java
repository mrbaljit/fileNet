package co.nz.suncorp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.crossstore.RelatedDocument;


public class FileNetProfile {

    @Id
    public String id;

    public String profileName;
    public String sourceRepository;
    public String targetRepository;

    public SurveyInfo getSurveyInfo() {
        return surveyInfo;
    }

    public void setSurveyInfo(SurveyInfo surveyInfo) {
        this.surveyInfo = surveyInfo;
    }

    @RelatedDocument
    private SurveyInfo surveyInfo;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }

    public String getSourceRepository() {
        return sourceRepository;
    }

    public void setSourceRepository(String sourceRepository) {
        this.sourceRepository = sourceRepository;
    }

    public String getTargetRepository() {
        return targetRepository;
    }

    public void setTargetRepository(String targetRepository) {
        this.targetRepository = targetRepository;
    }

    public FileNetProfile() {}

    public FileNetProfile(String profileName, String sourceRepository, String targetRepository) {
        this.profileName = profileName;
        this.sourceRepository = sourceRepository;
        this.targetRepository = targetRepository;
    }

    @Override
    public String toString() {
        return String.format(
                "FileNetApplication[id=%s, profileName='%s', sourceRepository='%s' , targetRepository='%s']",
                id, profileName, sourceRepository ,targetRepository);
    }

}

