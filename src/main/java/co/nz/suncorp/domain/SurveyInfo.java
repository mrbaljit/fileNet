package co.nz.suncorp.domain;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Baljit on 10/10/2016.
 */
public class SurveyInfo {

    private Map<String, String> questionsAndAnswers;

    public SurveyInfo() {
        this.questionsAndAnswers = new HashMap<String, String>();
    }

    public SurveyInfo(Map<String, String> questionsAndAnswers) {
        this.questionsAndAnswers = questionsAndAnswers;
    }

    public Map<String, String> getQuestionsAndAnswers() {
        return questionsAndAnswers;
    }

    public void setQuestionsAndAnswers(Map<String, String> questionsAndAnswers) {
        this.questionsAndAnswers = questionsAndAnswers;
    }

    public SurveyInfo addQuestionAndAnswer(String question, String answer) {
        this.questionsAndAnswers.put(question, answer);
        return this;
    }
}
