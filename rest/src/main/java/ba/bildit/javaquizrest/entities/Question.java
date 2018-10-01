package ba.bildit.javaquizrest.entities;

import ba.bildit.javaquizrest.dto.AnswerDTO;
import ba.bildit.javaquizrest.dto.QuestionDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Question implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String question;
    private String snippet;
    private int difficulty;

    @ManyToOne
    private Section section;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "question")
    private List<Answer> answers;

    public Question(QuestionDTO questionDTO) {
        this.question = questionDTO.getQuestion();
        this.snippet = questionDTO.getSnippet();
        this.difficulty = questionDTO.getDifficulty();
        this.section = new Section(questionDTO.getSection());
        this.answers = new ArrayList<Answer>();
        for (AnswerDTO answerDTO : questionDTO.getAnswers()) {
            this.answers.add(new Answer(answerDTO));
        }
    }

    public Question(String question, String snippet, Section section, int difficulty) {
        this.difficulty = difficulty;
        this.question = question;
        this.snippet = snippet;
        this.section = section;
    }

    public Question(String question, String snippet, Section section, int difficulty, List<Answer> answers) {
        this.difficulty = difficulty;
        this.question = question;
        this.snippet = snippet;
        this.section = section;
        this.answers = answers;
    }

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", snippet=" + snippet +
                ", section=" + section +
                ", answers=" + answers +
                '}';
    }
}
