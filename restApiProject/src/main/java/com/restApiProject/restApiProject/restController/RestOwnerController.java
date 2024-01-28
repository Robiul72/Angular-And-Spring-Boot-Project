package com.restApiProject.restApiProject.restController;

import com.restApiProject.restApiProject.model.OwnerModel;
import com.restApiProject.restApiProject.repository.OwnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RestOwnerController {

    @Autowired
    private OwnerRepo ownerRepo;


    @GetMapping("/owner")
  public   List<OwnerModel> allOwner(){

        return  ownerRepo.findAll();
    }

    @PostMapping("/owner")
    public OwnerModel saveOwner(@RequestBody OwnerModel ownerModel){
        return ownerRepo.save(ownerModel);
    }



    @DeleteMapping("/owner/{id}")
    public ResponseEntity<String> deleteOwner(@PathVariable ("id") int id){
        boolean esist=ownerRepo.existsById(id);

        if(esist){
            ownerRepo.deleteById(id);

            return new ResponseEntity<>("Owner is delete", HttpStatus.OK);
        }
        return new ResponseEntity<>("Owner is not delete", HttpStatus.BAD_REQUEST);

    }


    @PutMapping("/owner/{id}")
    public  ResponseEntity<String> updateOwner(@PathVariable ("id") int id, @RequestBody OwnerModel ownerModel){
        boolean esist=ownerRepo.existsById(id);

        if(esist){
            OwnerModel owner=ownerRepo.findById(id).get();
            owner.setOwnerName(ownerModel.getOwnerName());
            owner.setEmail(ownerModel.getEmail());
            owner.setMobile(ownerModel.getMobile());
            owner.setId(id);

            ownerRepo.save(owner);
            return new ResponseEntity<>("Owner is Update", HttpStatus.OK);

        }
        return new ResponseEntity<>("Owner is not Update", HttpStatus.BAD_REQUEST);

    }



}
