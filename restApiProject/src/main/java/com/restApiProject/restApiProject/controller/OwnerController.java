package com.restApiProject.restApiProject.controller;
import com.restApiProject.restApiProject.model.OwnerModel;
import com.restApiProject.restApiProject.repository.HouseRepo;
import com.restApiProject.restApiProject.repository.OwnerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
public class OwnerController {


    @Autowired
    private OwnerRepo ownerRepo;

    @Autowired
    private HouseRepo houseRepo;

    //  House Rent Form start
    @GetMapping("/owner/form")
    public String ownerForm(Model m){
        OwnerModel owner=new OwnerModel();
        m.addAttribute("owner", owner);
        return "OwnerFrom";
    }
    // House Rent form end


    //  House Rent view start
    @GetMapping("/owner/view")
    public  String allOwnerView( Model m){
        List<OwnerModel> ownerModelList=ownerRepo.findAll();
        m.addAttribute("ownerModelList", ownerModelList);
        return "OwnerView";
    }
    // House Rent form end


    // House Rent Save start
    @PostMapping("/owner/save")
    public String saveOwner(@ModelAttribute OwnerModel owner) {
        ownerRepo.save(owner);
        return "redirect:/owner/view";
    }
    // House Rent Save end


    // House Rent delete start
    @RequestMapping("/owner/delete/{id}")
    public String deleteOwner(@PathVariable int id){
        ownerRepo.deleteById(id);
        return "redirect:/owner/view";
    }
    // House Rent delete end



    // House Rent Edit start
    @RequestMapping("/owner/edit/{id}")
    public String editOwner(@PathVariable ("id") int id, Model m){
        Optional<OwnerModel> ownerModelOptional=ownerRepo.findById(id);

        if(ownerModelOptional.isPresent()){
            OwnerModel ownerModel1 =ownerModelOptional.get();
            m.addAttribute("owneredit", ownerModel1);
        }

        return "OwnerEdit";
    }
    // House Rent Edit end
}
