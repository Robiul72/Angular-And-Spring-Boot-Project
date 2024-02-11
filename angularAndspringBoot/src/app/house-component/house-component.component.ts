import { Component, OnInit } from '@angular/core';
import { HouseModel } from '../models/houseModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HouseserviceService } from '../service/houseservice.service';

@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrl: './house-component.component.css'
})
export class HouseComponentComponent implements OnInit{

  houseModel: HouseModel = new HouseModel();


  formValue !: FormGroup;

  houseData: any;

  ownerData: any[] = [];


  constructor(private houseService: HouseserviceService, private formBilder: FormBuilder){

    this.formValue =this.formBilder.group({
      total_cost:['']
    });
  }




  ngOnInit(): void {
    this.getAllHouse();
    // this.loadOwners();

    this.ownerData = this.;

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

        ownerName: ['']

       
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



  setHouseModelFrom():void{
    this.houseModel.build_Name = this.formValue.value.build_Name;
    this.houseModel.floor_No = this.formValue.value.floor_No;
    this.houseModel.unit_No = this.formValue.value.unit_No;
    this.houseModel.bedroom = this.formValue.value.bedroom;
    this.houseModel.location = this.formValue.value.location;
    this.houseModel.description = this.formValue.value.description;
    this.houseModel.monthly_rent = this.formValue.value.monthly_rent;
    this.houseModel.electricity_rent = this.formValue.value.electricity_rent;
    this.houseModel.water_rent = this.formValue.value.water_rent;
    this.houseModel.garbage_rent = this.formValue.value.garbage_rent;
    this.houseModel.total_cost_rent = this.formValue.value.total_cost_rent;
  }



  saveHouse() {

    this.setHouseModelFrom();

    this.houseModel.build_Name = this.formValue.value.build_Name;
    this.houseModel.floor_No = this.formValue.value.floor_No;
    this.houseModel.unit_No = this.formValue.value.unit_No;
    this.houseModel.bedroom = this.formValue.value.bedroom;
    this.houseModel.location = this.formValue.value.location;
    this.houseModel.description = this.formValue.value.description;
    this.houseModel.monthly_rent = this.formValue.value.monthly_rent;
    this.houseModel.electricity_rent = this.formValue.value.electricity_rent;
    this.houseModel.water_rent = this.formValue.value.water_rent;
    this.houseModel.garbage_rent = this.formValue.value.garbage_rent;
    this.houseModel.total_cost_rent = this.formValue.value.total_cost_rent;

    this.houseService.saveHouse(this.houseModel)
      .subscribe(
        (res) => {
          this.getAllHouse();
          this.formValue.reset();
          alert("House Saved");
        },
        (err) => {
          console.error("Error saving house:", err);
          
          alert("House Not Saved. Check console for details.");
        }
      );
  }

}
