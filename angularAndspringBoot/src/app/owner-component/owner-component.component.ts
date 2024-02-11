import { Component, OnInit } from '@angular/core';
import { OwnerModel } from '../models/ownerModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwnerserviceService } from '../service/ownerservice.service';
import { error } from 'console';

@Component({
  selector: 'app-owner-component',
  templateUrl: './owner-component.component.html',
  styleUrl: './owner-component.component.css'
})
export class OwnerComponentComponent implements OnInit{

  // ownerModel: OwnerModel= new OwnerModel();

  // formValue!:FormGroup;

  // ownerData:any;

  // constructor(private ownerService:OwnerserviceService, private formBuilder: FormBuilder){ }

  // initializeForm():void{
  //   this.formValue = this.formBuilder.group({
  //     name:['', Validators.required],
  //     email: ['', Validators.required],
  //     mobile:['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   this.initializeForm();
  //   this.getAllOwner();
   
  // }

  // getAllOwner(): void {
  //   this.ownerService.getAllOwner()
  //     .subscribe(res => {
  //       this.ownerData = res;     
  //     });
  // }



  // saveOwner():void{

  //   this.setOwnerModelFrom();

  //   this.ownerService.ownerPost(this.ownerModel)
  //   .subscribe(
  //     res => {
  //       console.log('Response:', res);
  //       alert("Data Save");
  //       this.formValue.reset();
  //       this.getAllOwner();
  //     },
  //     err => {
  //       console.error('Error:', err);
  //       alert("Data Not saved");
  //     }
  //   );
  // }


  // setOwnerModelFrom():void{
  //   this.ownerModel.name=this.formValue.value.ownerName;
  //   this.ownerModel.email=this.formValue.value.email;
  //   this.ownerModel.mobile=this.formValue.value.mobile;
  
  //   }
  


  // ownerDelete (row:any){
  //   this.ownerService.deleteOwner(row.id)
  //   .subscribe({
  //     next:res=>{
  //       console.log('Owner Delete');
  //       this.getAllOwner();
  //       this.setOwnerModelFrom();
  //       console.log(res);
  //     },
  //     error:err=>{
  //       this.getAllOwner();
  //       alert('Owner Not delete');
  //       console.log(err);
  //     }
  //   })
  
  // }



  // onEdit(row:any):void{
  //   this.ownerModel.id = row.id;
    
  //   this.formValue.controls['name'].setValue(row.name);
  //   this.formValue.controls['email'].setValue(row.email);
  //   this.formValue.controls['mobile'].setValue(row.mobile);
   
  // }



  // editOwner(row: any): void {
  //   // Check if row.id is defined and is a number
  //   if (row && typeof row.id === 'number') {
  //     // Assuming you have an editOwner method that expects a valid ID and data
  //     this.ownerService.editOwner(row.id, row)
  //       .subscribe(
  //         (res) => {
  //           console.log('Response:', res);
  //           alert("Data Edited");
  //           this.formValue.reset();  // Assuming formValue is a form control or form group
  //           this.getAllOwner();  // Assuming getAll retrieves the updated data list
  //         },
  //         (err) => {
  //           console.error('Error:', err);
  //           alert("Data Not Edited");
  //         }
  //       );
  //   } else {
  //     console.error("Invalid data ID");
  //     // Handle the case where row.id is not valid (e.g., show an error message)
  //   }
  // }


  // ownerEdit():void{
  //   this.setOwnerModelFrom();

  //   this.ownerService.editOwner(this.ownerModel.id, this.ownerModel)
  //   .subscribe(res=>{
  //     console.log(res);
  //     alert("Data Update");
  //     this.formValue.reset();
  //     this.getAllOwner();
  //   },
    
  //   err=>{
  //     alert("Data Not Update");
  //   });
  // }


  owners: OwnerModel[] = [];

  ownerModel: OwnerModel = new OwnerModel();

  formValue !: FormGroup;

  ownerData: any;


  constructor(private ownerService: OwnerserviceService, private formBilder: FormBuilder){}

  ngOnInit(): void {
    this.getallOwner();
    // this.loadOwners();

    this.formValue = this.formBilder.group(
      {
        ownerName: [''],
        email: [''],
        mobile: ['']
      }
    ) 
  }


  getallOwner(){
    this.ownerService.getAllOwner()
    .subscribe(
      res=>{
        this.ownerData=res
      }
    )
  }




  saveOwner() {

    this.setOwnerModelFrom();

    this.ownerModel.name = this.formValue.value.name;
    this.ownerModel.email = this.formValue.value.email;
    this.ownerModel.mobile = this.formValue.value.mobile;
    
    this.ownerService.saveOwner(this.ownerModel)
      .subscribe(
        (res) => {
          this.getallOwner();
          this.formValue.reset();
          alert("Owner Saved");
        },
        (err) => {
          console.error("Error saving owner:", err);
          alert("Owner Not Saved. Check console for details.");
        }
      );
  }


  setOwnerModelFrom():void{
    this.ownerModel.name = this.formValue.value.name;
    this.ownerModel.email = this.formValue.value.email;
    this.ownerModel.mobile = this.formValue.value.mobile;
  }


  // Assuming you have an owner object with an 'id' property
  deleteowner(ownerId: number) {
    if (confirm("Are you sure you want to delete this owner?")) {
      this.ownerService.deleteOwner(ownerId)
        .subscribe(
          (res) => {
            // Handle successful deletion
            console.log("Owner deleted successfully");
          },
          (err) => {
            console.error("Error deleting owner:", err);
          }

        );
      
    }
  }

onEdit(row: any):void{

  this.ownerModel.id = row.id;

  this.formValue.controls['ownerName'].setValue(row.ownerName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
}




// updateOwner():void{
//   this.setOwnerModelFrom();

//   this.ownerService.editOwner(this.ownerModel.id, this.ownerModel)
//   .subscribe(res=>{
//     console.log(res);
//     alert("Owner Update");
//     this.formValue.reset();
//     this.getallOwner();
//   }, 
//   err=>{
//     alert("Owner Not Update")
//   })
// }

updateOwner(): void {
  this.setOwnerModelFrom();

  // Check if this.ownerModel.id is defined and is a number
  if (this.ownerModel.id !== undefined && typeof this.ownerModel.id === 'number') {

    this.ownerService.editOwner(this.ownerModel.id, this.ownerModel)
      .subscribe(
        (res) => {
          console.log(res);
          alert("Owner Updated");
          this.formValue.reset();  // Assuming formValue is a form control or form group
          this.getallOwner();  // Assuming getallOwner retrieves the updated owner list
        },
        (err) => {
          console.error(err);
          alert("Owner Not Updated");
        }
      );
  }
   else {
    console.error("Invalid owner ID");
  }
}


}
