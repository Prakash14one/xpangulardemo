import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'xb-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class AddNewAddressComponent implements OnInit {
  add_title = new FormControl('', [
    Validators.required
  ])
  add_1 = new FormControl('', [
    Validators.required
  ])
  add_2 = new FormControl('', [
    Validators.required
  ])
  city = new FormControl('', [
    Validators.required
  ])
  zipCode = new FormControl('', [
    Validators.required
  ])
  

  Data: any;
  files: any;
  File: any = [];
  Address: any = [];
  newadd: FormGroup;
  constructor(private service: ProjectsService,public dialogRef: MatDialogRef<AddNewAddressComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
  
    this.newadd = this.formBuilder.group({
      add_title: this.add_title,
      add_1: this.add_1,
      add_2: this.add_2,
      city: this.city,
      zipCode: this.zipCode
    });
  
}
add() {
  if (this.newadd.valid) {
    console.log('form submitted');
  }
  else {
    Object.keys(this.newadd.controls).forEach(field => { // {1}
      const control = this.newadd.get(field);            // {2}
      control.markAsTouched({ onlySelf: true });       // {3}
    });
  }
}
  

  OnNoClick() {
    let dialogRef = this.dialog.open(ConfirmationComponent,{

    });
  }
}
