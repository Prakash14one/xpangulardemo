import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'xb-consumer-create-new-post',
  templateUrl: './consumer-create-new-post.component.html',
  styleUrls: ['./consumer-create-new-post.component.scss']
})
export class ConsumerCreateNewPostComponent implements OnInit {
  categoriesList: any = [];
  subcategoriesList: any = [];
  CreateForm: FormGroup
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
  dtdesireddate = new FormControl('', [
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
  chkTermCondi = new FormControl('', [
    Validators.required
  ])
  urls: any;
  files: any;
  File: any = [];
  Address: any = [];
  constructor(private _projectsService: ProjectsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.CreateForm = this.formBuilder.group({
      category: this.category,
      subcategory: this.subcategory,
      title: this.title,
      description: this.description,
      dtdesireddate: this.dtdesireddate,
      location: this.location,
      service_type: this.service_type,
      chkTermCondi: this.chkTermCondi,
      address: this.address,
      file: this.file,
      add_title: this.add_title,
      add_1: this.add_1,
      add_2: this.add_2,
      city: this.city,
      zipCode: this.zipCode
    })
    this.getcategoriesList();
  }
  getcategoriesList() {
    this._projectsService.getcategories().subscribe(res => {
      this.categoriesList = res.results;
      console.log(this.categoriesList);
    });
  }
  filterSubById(event) {
    console.log(event);
    this._projectsService.getsubcategories(event).subscribe(response => {
      this.subcategoriesList = response.results;
      console.log(this.subcategoriesList);
    });
  }
  selectFile(event) {
    this.files = event.target.files;
    console.log(this.files);
    var filesAmount = event.target.files.length;
    var totalFileSize = 0;
    for (var i = 0; i <= filesAmount - 1; i++) {
      var fsize = this.files[i].size;
      totalFileSize = totalFileSize + fsize;
      console.log('FileName: ' + this.files[i].name + '   FileSize: ' + totalFileSize +
        '    File Type is: ' + this.files[i].type + "</b>.");
      this.File.push({ 'filename': this.files[i].name, 'fileSize': totalFileSize, 'fileType': this.files[i].type });
      document.getElementById('file-upload-filename').textContent = this.files[i].name;
    }
    console.log(this.File);
  }
  SubmitNewProject() {
    this.Address.push({ 'add_title': this.add_title, 'add_1': this.add_1, 'add_2': this.add_2, 'city': this.city, 'zipCode': this.zipCode, })
    // this.CreateForm['file'] = this.File;
    // this.CreateForm['address'] = this.Address;
    this.CreateForm.patchValue({file:this.File});
    this.CreateForm.patchValue({address:this.Address});
    console.log(this.CreateForm.value);
    Swal.fire({
      title: 'Creating New Project',
      text: 'Please wait...',
      type: 'info',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      preConfirm: function (value) {
        return new Promise((function (resolve) {
          this._projectsService.createNewProject(this.CreateForm.value).subscribe((result) => {
            console.log('result: ', result);
            resolve(result);
          })
        }));
      }
    }).then(function (result) {
      console.log('result: ', result);
      if (result.value == true) {
        Swal('Created!', 'Your project has been created in our system.', 'success');
        // should clear the form and route to Manage Posts page.00
      }
      else {
        Swal('Project creation failed.', result.value.Message, 'error');
      }
    }).catch(function (arg) {
      Swal({
        type: 'error',
        title: 'Cancelled',
        text: '',
        html: 'This project was not created.'
      })
    });
  }
}
