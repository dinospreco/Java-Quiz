package ba.bildit.javaquizrest.contoller;

import ba.bildit.javaquizrest.dto.QuestionDTO;
import ba.bildit.javaquizrest.entities.Question;
import ba.bildit.javaquizrest.erorr.ApiError;
import ba.bildit.javaquizrest.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("questions")
@CrossOrigin(origins = "http://localhost:4200")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    @ResponseStatus(CREATED)
    public Question addQuestion(@RequestBody QuestionDTO question){
        return questionService.saveQuestion(question);
    }

    @ExceptionHandler
    public ResponseEntity<Object> handleIllegalArgumentException(IllegalArgumentException ex) {
        ApiError error = new ApiError(HttpStatus.BAD_REQUEST, "Question Illegal Argument Error", ex);
        return new ResponseEntity<>(error, error.getStatus());
    }
}
