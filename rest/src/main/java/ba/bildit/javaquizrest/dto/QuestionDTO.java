package ba.bildit.javaquizrest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class QuestionDTO {

    @JsonProperty("question")
    private String question;

    @JsonProperty("snippet")
    private String snippet;

    @JsonProperty("difficulty")
    private int difficulty;

    @JsonProperty("section")
    private SectionDTO section;

    @JsonProperty("answers")
    private List<AnswerDTO> answers;
}
