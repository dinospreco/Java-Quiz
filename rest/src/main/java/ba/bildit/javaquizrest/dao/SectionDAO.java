package ba.bildit.javaquizrest.dao;

import ba.bildit.javaquizrest.entities.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionDAO extends JpaRepository<Section, Long> {
}
