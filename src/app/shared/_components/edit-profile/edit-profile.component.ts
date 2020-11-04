import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProjectsService } from '../../../components/services/projects.service';

@Component({
  selector: 'xb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  files: any;
  editForm: FormGroup

  firstName = new FormControl(' ', [
    Validators.required
  ])
  lastName = new FormControl(' ', [
    Validators.required
  ])
  email = new FormControl(' ', [
    Validators.required,Validators.email
  ])
  companyName = new FormControl(' ', [
    Validators.required
  ])
  phone = new FormControl(' ', [
    Validators.required
  ])
  address1 = new FormControl(' ', [
    Validators.required
  ])
  address2 = new FormControl(' ', [
    Validators.required
  ])
  city = new FormControl(' ', [
    Validators.required
  ])
  state = new FormControl(' ', [
    Validators.required
  ])
  security = new FormControl(' ', [
    Validators.required
  ])
  answer = new FormControl(' ', [
    Validators.required
  ])
  zip = new FormControl(' ', [
    Validators.required
  ])

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>, public dialog: MatDialog, private service: ProjectsService,
    private formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      companyName: this.companyName,
      phone: this.phone,
      address1: this.address1,
      address2: this.address2,
      city: this.city,
      state: this.state,
      security: this.security,
      answer: this.answer,
      zip: this.zip
    })
    this.service.getAccountImage().subscribe(res=>{
      console.log(res);
    })
    console.log(this.data);
    this.editForm.patchValue({
      'firstName':this.data.accountdata.firstName,
      'lastName':this.data.accountdata.lastName,
      'email':this.data.accountdata.email
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  selectFile(event: any) {
    this.files = event.target.files;
    if(this.files.length > 0){
      var fileReader = new  FileReader();
      fileReader.onload = function(event){
        console.log(event);
        // document.getElementById('img').setAttribute("src",event.target.result as string);
      }
      fileReader.readAsDataURL(this.files[0]);
    }
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.service.postaccountdata(this.editForm.value).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    })
  }

}
