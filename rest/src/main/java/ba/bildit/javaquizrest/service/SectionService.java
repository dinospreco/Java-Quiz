package ba.bildit.javaquizrest.service;

import ba.bildit.javaquizrest.dao.SectionDAO;
import ba.bildit.javaquizrest.entities.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SectionService {

    @Autowired
    private SectionDAO sectionDAO;

    public List<Section> getAllSections() {
        return sectionDAO.findAll();
    }

}
