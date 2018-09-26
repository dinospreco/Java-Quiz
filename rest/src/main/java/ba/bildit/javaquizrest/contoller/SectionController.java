package ba.bildit.javaquizrest.contoller;

import ba.bildit.javaquizrest.entities.Section;
import ba.bildit.javaquizrest.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SectionController {

    @Autowired
    private SectionService sectionService;

    @RequestMapping("/sections")
    public List<Section> getAllSection() {
        return sectionService.getAllSections();
    }
}
