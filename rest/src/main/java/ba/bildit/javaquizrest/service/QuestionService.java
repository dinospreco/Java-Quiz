package ba.bildit.javaquizrest.service;

import ba.bildit.javaquizrest.dao.AnswerDAO;
import ba.bildit.javaquizrest.dao.QuestionDAO;
import ba.bildit.javaquizrest.dao.SectionDAO;
import ba.bildit.javaquizrest.dto.QuestionDTO;
import ba.bildit.javaquizrest.entities.Answer;
import ba.bildit.javaquizrest.entities.Question;
import ba.bildit.javaquizrest.entities.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionDAO questionDAO;

    @Autowired
    private AnswerDAO answerDAO;

    @Autowired
    private SectionDAO sectionDAO;

    public Question saveQuestion(QuestionDTO questionDTO) {
        Question question = new Question(questionDTO);
        validateQuestion(question);
        saveSection(question);
        saveAnswers(question);
        return questionDAO.save(question);
    }

    private Section saveSection(Question question) {
        Section checkedSection = sectionDAO.getSectionBySection(question.getSection().getSection());

        if (checkedSection != null) {
            question.setSection(checkedSection);
            return checkedSection;
        } else {
            return sectionDAO.save(question.getSection());
        }
    }

    private List<Answer> saveAnswers(Question question) {

        validateAnswersList(question.getAnswers());

        //Map question to the answers before saving them (question must be saved first)
        //Save question without answers first
        Question savedQuestion = saveQuestionWithoutAnswers(question);

        for (Answer answer : question.getAnswers()) {
            answer.setQuestion(savedQuestion);
        }

        return answerDAO.saveAll(question.getAnswers());
    }

    private Question saveQuestionWithoutAnswers(Question question) {
        return questionDAO.save(question);
    }

    private boolean validateQuestion(Question question) throws IllegalArgumentException {
        if (question.getQuestion() == null || question.getQuestion().trim().length() == 0) {
            throw new IllegalArgumentException("Question cannot be null or empty string");
        }
        return validateSection(question) && validateAnswersList(question.getAnswers());
    }

    private boolean validateSection(Question question) {
        if (question.getSection() == null || question.getSection().getSection().trim().length() == 0) {
            throw new IllegalArgumentException("Section cannot be null or empty string");
        }
        return true;
    }

    private boolean validateAnswersList(List<Answer> answers) throws IllegalArgumentException {

        //Check if answers list have at least 4 elements;
        if (answers.size() < 4) {
            throw new IllegalArgumentException("Answer list must have at least 4 elements!");
        }

        //Check if answers list have 1 correct answer
        boolean foundCorrectAnswer = false;
        for (Answer answer : answers) {
            if (answer.isCorrectAnswer()) {
                foundCorrectAnswer = true;
                break;
            }
        }
        if(!foundCorrectAnswer) {
            throw new IllegalArgumentException("Answer list must have at least 1 correct answer");
        }

        return true;
    }

}
