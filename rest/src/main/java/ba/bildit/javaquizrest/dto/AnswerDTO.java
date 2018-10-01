package ba.bildit.javaquizrest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class AnswerDTO {

    @JsonProperty("answer")
    private String answer;

    @JsonProperty("correctAnswer")
    private boolean correctAnswer;
}
