import { Component, OnInit } from '@angular/core';
import { HouseModel } from '../models/houseModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HouseserviceService } from '../service/houseservice.service';

@Component({
  selector: 'app-house-view-component',
  templateUrl: './house-view-component.component.html',
  styleUrl: './house-view-component.component.css'
})
export class HouseViewComponentComponent implements OnInit{

  houseModel: HouseModel = new HouseModel();


  formValue !: FormGroup;

  houseData: any;


  constructor(private houseService: HouseserviceService, private formBilder: FormBuilder){

    this.formValue =this.formBilder.group({
      total_cost:['']
    });
  }




  ngOnInit(): void {
    this.getAllHouse();
    // this.loadOwners();

    this.formValue = this.formBilder.group(
      {
        build_Name: [''],
        floor_No: [''],
        unit_No: [''],
        bedroom: [''],
        location: [''],
        description: [''],
        monthly_rent: [''],
        electricity_rent: [''],
        water_rent: [''],
        garbage_rent: [''],
        total_cost_rent: [''],
        image: [''],
        date: [''],

        ownerName: {
          h_Rent_NID: [''],
          h_Rent_Owner_Name: [''],
          h_Rent_Email: [''],
          h_Rent_Mobile: [''],
          image: [''],
        }

       
      }
    ) 
  }


  getAllHouse(){
    this.houseService.getAllHouse()
    .subscribe(
      res=>{
        this.houseData=res
      }
    )
  }



}
