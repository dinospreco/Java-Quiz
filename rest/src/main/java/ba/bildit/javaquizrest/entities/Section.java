package ba.bildit.javaquizrest.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private String section;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "section")
    private List<Question> questions;

    public Section(String section) {
        this.section = section;
    }

    @Override
    public String toString() {
        return "Section{" +
                "id=" + id +
                ", section='" + section + '\'' +
                '}';
    }
}
