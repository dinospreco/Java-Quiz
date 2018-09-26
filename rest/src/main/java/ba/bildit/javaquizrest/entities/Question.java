package ba.bildit.javaquizrest.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String question;

    private String snippet;

    private int difficulty;

    @ManyToOne
    private Section section;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "question")
    private List<Answer> answers;

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
