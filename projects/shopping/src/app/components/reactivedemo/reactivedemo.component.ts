import { Component, OnInit } from '@angular/core';

//step 1 , import formbuilder service and validators
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {

  //step 2, inject service
  constructor(private fb:FormBuilder) { }

  //step 3
  //group() is use to create form
  public frmRegister = this.fb.group({

    //default value of control is empty ''
    UserName: this.fb.control('',[Validators.required, Validators.minLength(4)]),

    Mobile: this.fb.control('',[Validators.required, Validators.pattern(/\+91\d{10}/)]),

    //array() method
    Photos:this.fb.array([this.fb.control('')])

  })

  //step 5 -accessor for control and return as a formControl
  get UserName(){
    return this.frmRegister.get('UserName')as FormControl;
  }

  get Mobile(){
    return this.frmRegister.get('Mobile') as FormControl;
  }

  //step 9 
  get Photos(){
    return this.frmRegister.get('Photos') as FormArray;
  }

  ngOnInit(): void {
    
  }
  //step 8 here that details are received by form data parameter in any format 
  public SubmitForm(formdata:any){
    //this is used to data in json
    alert(JSON.stringify(formdata));
  }

  //step 11 -once click on more this method will add one more control
  public AddControls(){
     this.Photos.push(this.fb.control(''))
  }

  //step 13
  public RemoveControl(index:number){
    this.Photos.removeAt(index);
  }
}
