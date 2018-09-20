package ba.bildit.javaquizrest;

import ba.bildit.javaquizrest.dao.AnswerDAO;
import ba.bildit.javaquizrest.dao.QuestionDAO;
import ba.bildit.javaquizrest.dao.SectionDAO;
import ba.bildit.javaquizrest.entities.Answer;
import ba.bildit.javaquizrest.entities.Question;
import ba.bildit.javaquizrest.entities.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Profile("dev")
@Component
public class TestCLRunner implements ApplicationRunner {

    @Autowired
    private QuestionDAO questionDAO;

    @Autowired
    private SectionDAO sectionDAO;

    @Autowired
    private AnswerDAO answerDAO;

    @Override
    public void run(ApplicationArguments args) throws Exception {

//        dataBaseInit();

    }

    private void dataBaseInit() {
        
        Section section1 = new Section("SELECTIONS");
        Section section2 = new Section("LOOPS");
        Section section3 = new Section("METHODS");

        sectionDAO.save(section1);
        sectionDAO.save(section2);
        sectionDAO.save(section3);

        Question question1 = new Question("What types of loops Java have?", false, section2);
        questionDAO.save(question1);

        Answer answer1 = new Answer("Pre-test and post-test", true, question1);
        Answer answer2 = new Answer("Good and bad", false, question1);
        Answer answer3 = new Answer("Fast and slow", false, question1);
        List<Answer> answers = new ArrayList<>();
        answers.add(answer1);
        answers.add(answer2);
        answers.add(answer3);

        answerDAO.saveAll(answers);

        Question question2 = new Question("Another question?", false, section1);
        questionDAO.save(question2);

        Answer answer11 = new Answer("This is correct answer", true, question2);
        Answer answer21 = new Answer("This is not correct answer", false, question2);
        Answer answer31 = new Answer("This is not correct answer 2", false, question2);
        List<Answer> answers1 = new ArrayList<>();
        answers1.add(answer11);
        answers1.add(answer21);
        answers1.add(answer31);

        answerDAO.saveAll(answers1);

        Question question21 = new Question("Another question?", false, section1);
        questionDAO.save(question21);

        Answer answer111 = new Answer("This is correct answer 1", true, question21);
        Answer answer211 = new Answer("This is not correct answer 1", false, question21);
        Answer answer311 = new Answer("This is not correct answer 2 1", false, question21);
        List<Answer> answers11 = new ArrayList<>();
        answers11.add(answer111);
        answers11.add(answer211);
        answers11.add(answer311);

        answerDAO.saveAll(answers11);

    }
}
