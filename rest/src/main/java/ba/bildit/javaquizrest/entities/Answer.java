package ba.bildit.javaquizrest.entities;

import ba.bildit.javaquizrest.dto.AnswerDTO;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String answer;
    private boolean correctAnswer;

    @ManyToOne
    private Question question;

    public Answer(AnswerDTO answerDTO) {
        this.answer = answerDTO.getAnswer();
        this.correctAnswer = answerDTO.isCorrectAnswer();
    }

    public Answer(String answer, boolean correctAnswer) {
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    }

    public Answer(String answer, boolean correctAnswer, Question question) {
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.question = question;
    }

    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                ", answer='" + answer + '\'' +
                ", correctAnswer=" + correctAnswer +
                '}';
    }
}
