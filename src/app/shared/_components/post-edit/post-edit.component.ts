import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from '../../../components/services/projects.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {ConfirmationComponent} from '../confirmation/confirmation.component';

@Component({
  selector: 'xb-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  categoriesList: any = [];
  subcategoriesList: any = [];
  editForm: FormGroup;
  category = new FormControl('', [
    Validators.required
  ])
  subcategory = new FormControl('', [
    Validators.required
  ])
  title = new FormControl('', [
    Validators.required
  ])
  description = new FormControl('', [
    Validators.required
  ])
  file = new FormControl('', [
    Validators.required
  ])
  desireddate = new FormControl('', [
    Validators.required
  ])
  location = new FormControl('', [
    Validators.required
  ])
  service_type = new FormControl('', [
    Validators.required
  ])
  address = new FormControl('', [
    Validators.required
  ])
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
  TermCondi = new FormControl('', [
    Validators.required
  ])
  Data: any;
  files: any;
  File: any = [];
  Address: any = [];
  constructor(private service: ProjectsService,public dialogRef: MatDialogRef<PostEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      category: this.category,
      subcategory: this.subcategory,
      title: this.title,
      description: this.description,
      file: this.file,
      desireddate: this.desireddate,
      location: this.location,
      service_type: this.service_type,
      address: this.address,
      add_title: this.add_title,
      add_1: this.add_1,
      add_2: this.add_2,
      city: this.city,
      zipCode: this.zipCode,
      TermCondi: this.TermCondi
    })
    console.log(this.data);
    this.Data = this.data.postData;
    this.editForm.patchValue({
      'id': this.Data.id,
      'title': this.Data.title,
      'description': this.Data.description,
      'desireddate': this.Data.desiredRangeEnd,
      'service_type': this.data.serviceType,
      'category': this.Data.category,
      'subcategory': this.data.subcategory
    })
    this.getcategoriesList();
  }
  getcategoriesList() {
    this.service.getcategories().subscribe(res => {
      this.categoriesList = res.results;
      console.log(this.categoriesList);
    });
  }
  filterSubById(event) {
    console.log(event);
    this.service.getsubcategories(event.id).subscribe(response => {
      this.subcategoriesList = response.results;
      console.log(this.subcategoriesList);
    });
  }

  SelectFile(event) {
    this.files = event.target.files;
    console.log(this.files);
    var filesAmount = event.target.files.length;
    var totalFileSize = 0;
    if (filesAmount > 0) {
      for (var i = 0; i <= filesAmount - 1; i++) {
        var fsize = this.files[i].size;
        totalFileSize = totalFileSize + fsize;
        this.File.push({ 'filename': this.files[i].name, 'fileSize': totalFileSize, 'fileType': this.files[i].type });
        document.getElementById('file-upload').textContent = this.files[i].name;
      }
      console.log(this.File);
    }
  }

  UpdatePost() {
    this.Address.push({ 'add_title': this.add_title, 'add_1': this.add_1, 'add_2': this.add_2, 'city': this.city, 'zipCode': this.zipCode, })
    this.editForm.patchValue({ file: this.File });
    this.editForm.patchValue({ address: this.Address });
    console.log(this.editForm.value);
    this.dialogRef.close();
  }

  OnNoClick() {
    let dialogRef = this.dialog.open(ConfirmationComponent,{

    });
  }
}
