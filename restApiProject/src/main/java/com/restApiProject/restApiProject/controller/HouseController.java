//package com.restApiProject.restApiProject.controller;
//
//import com.restApiProject.restApiProject.model.HouseModel;
//import com.restApiProject.restApiProject.model.OwnerModel;
//import com.restApiProject.restApiProject.repository.HouseRepo;
//import com.restApiProject.restApiProject.repository.OwnerRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//public class HouseController {
//
//
//
//    @Autowired
//    private OwnerRepo ownerRepo;
//
//    @Autowired
//    private HouseRepo houseRepo;
//
//    //  House Rent Form start
//    @GetMapping("/house/form")
//    public String houseForm(Model m){
//        List<OwnerModel> ownerList=ownerRepo.findAll();
//        m.addAttribute("ownerList", ownerList);
//        // to add department as dropdown from Department Model using Join Querry
//
//        m.addAttribute("owner", new OwnerModel());
//
//        m.addAttribute("house", new HouseModel());
//        return "HouseFrom";
//    }
//    // House Rent form end
//
//
//    //  House Rent view start
//    @GetMapping("/house/view")
//    public  String allHouseView( Model m){
//        List<HouseModel> houseModelList=houseRepo.findAll();
//        m.addAttribute("houseModelList", houseModelList);
//        return "HouseView";
//    }
//    // House Rent form end
//
//
//    // House Rent Save start
//    @PostMapping("/house/save")
//    public String saveHouse(@ModelAttribute HouseModel house) {
//        houseRepo.save(house);
//        return "redirect:/house/view";
//    }
//    // House Rent Save end
//
//
//    // House Rent delete start
//    @RequestMapping("/house/delete/{id}")
//    public String deleteHouse(@PathVariable int id){
//        houseRepo.deleteById(id);
//        return "redirect:/house/view";
//    }
//    // House Rent delete end
//
//
//
//    // House Rent Edit start
//    @RequestMapping("/house/edit/{id}")
//    public String editHouse(@PathVariable ("id") int id, Model m){
//        List<OwnerModel> ownerList=ownerRepo.findAll();
//        m.addAttribute("ownerList", ownerList);
//        m.addAttribute("ownerEntityModel", new OwnerModel());
//
//        Optional<HouseModel> houseModelOptional=houseRepo.findById(id);
//
//        if(houseModelOptional.isPresent()){
//            HouseModel houseModel =houseModelOptional.get();
//            m.addAttribute("huoseedit", houseModel);
//        }
//
//        return "HouseEdit";
//    }
//
////    @RequestMapping("/owner/edit/{id}")
////    public String editOwner(@PathVariable ("id") int id, Model m){
////        Optional<OwnerModel> ownerModelOptional=ownerRepo.findById(id);
////
////        if(ownerModelOptional.isPresent()){
////            OwnerModel ownerModel1 =ownerModelOptional.get();
////            m.addAttribute("owneredit", ownerModel1);
////        }
////
////        return "OwnerEdit";
////    }
//    // House Rent Edit end
//}
