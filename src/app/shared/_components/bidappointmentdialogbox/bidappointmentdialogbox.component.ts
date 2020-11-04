import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectsService } from '../../../components/services/projects.service';

@Component({
  selector: 'xb-bidappointmentdialogbox',
  templateUrl: './bidappointmentdialogbox.component.html',
  styleUrls: ['./bidappointmentdialogbox.component.scss']
})
export class BidAppointmentDialogBoxComponent implements OnInit {
  appointmentForm: FormGroup;
  show: boolean = false;
  constructor(private _projectsService: ProjectsService,
    public dialogRef: MatDialogRef<BidAppointmentDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public service, private formbulider: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.formbulider.group({
      meeting: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  addAppointment() {
    if (this.appointmentForm.valid) {
      let formData = {
        EventType: "Meeting",
        Subject: this.appointmentForm.value.meeting,
        StartDate: this.appointmentForm.value.startDate + 'T' + this.appointmentForm.value.startTime,
        EndDate: this.appointmentForm.value.endDate + 'T' + this.appointmentForm.value.endTime,
      }
      console.log(formData);
      this._projectsService.addAppointment(formData).subscribe(res => {
        this.show = true;
        this.appointmentForm.reset();
      });

    }
    else {
      this.validateAllFormFields(this.appointmentForm);
      return;
    }
  }
  cancel() {
    this.appointmentForm.reset();
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
