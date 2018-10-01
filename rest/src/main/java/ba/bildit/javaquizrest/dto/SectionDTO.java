package ba.bildit.javaquizrest.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SectionDTO {
    @JsonProperty("section")
    private String section;
}
