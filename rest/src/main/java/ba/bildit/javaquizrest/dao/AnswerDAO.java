package ba.bildit.javaquizrest.dao;

import ba.bildit.javaquizrest.entities.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerDAO extends JpaRepository<Answer, Long> {
}
