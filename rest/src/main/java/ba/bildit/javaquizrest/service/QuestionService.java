package ba.bildit.javaquizrest.service;

import ba.bildit.javaquizrest.dao.AnswerDAO;
import ba.bildit.javaquizrest.dao.QuestionDAO;
import ba.bildit.javaquizrest.dao.SectionDAO;
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

    public Question saveQuestion(Question question) {
        saveSection(question.getSection());
        saveQuestionWithoutAnswers(question);
        saveAnswers(question);
        return questionDAO.save(question);
    }

    private Section saveSection(Section section) {
        Section checkedSection = sectionDAO.getSectionBySection(section.getSection());

        if (checkedSection != null) {
            return checkedSection;
        } else {
            return sectionDAO.save(section);
        }
    }

    private List<Answer> saveAnswers(Question question) throws IllegalArgumentException {

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

    private boolean validateAnswersList(List<Answer> answers) throws IllegalArgumentException {

        //Check if answers list have at least 4 elements;
        if (answers.size() < 4) {
            throw new IllegalArgumentException("Answer list must have at least 4 elements!");
        }

        //Check if answers list have 1 correct answer
        for (Answer answer : answers) {
            if (answer.isCorrectAnswer()) {
                return true;
            }
            else {
                throw new IllegalArgumentException("Answer list must have at least 1 correct answer!");
            }
        }

        return true;
    }

}
