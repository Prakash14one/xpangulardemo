import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectsService } from '../../../components/services/projects.service';

@Component({
  selector: 'xb-bidmessagedialogbox',
  templateUrl: './bidmessagedialogbox.component.html',
  styleUrls: ['./bidmessagedialogbox.component.scss']
})
export class BidMessageDialogBoxComponent implements OnInit {
  messageForm: FormGroup;
  show: boolean = false;
  constructor(private _projectsService: ProjectsService,
    public dialogRef: MatDialogRef<BidMessageDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public service, private formbulider: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.messageForm = this.formbulider.group({
      message: ['', [Validators.required]],

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  sendMessage() {
    if (this.messageForm.valid) {
      let formData = {
        ProviderId: this.data.providerId,
        Message: this.messageForm.value.message,
      }
      this._projectsService.sendProjectMessage(this.data.projectId, formData).subscribe(res => {
        this.show = true;
        this.messageForm.reset();
        // this.dialogRef.close();
      });
    }
    else {
      this.validateAllFormFields(this.messageForm);
      return;
    }
  }
  cancel() {
    this.messageForm.reset();
    this.dialogRef.close();
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
