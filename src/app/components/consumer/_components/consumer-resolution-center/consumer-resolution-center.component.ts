import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationDialogComponent } from '../../../../shared/_components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'xb-consumer-resolution-center',
  templateUrl: './consumer-resolution-center.component.html',
  styleUrls: ['./consumer-resolution-center.component.scss']
})
export class ConsumerResolutionCenterComponent implements OnInit {
  resolutionForm: FormGroup;
  constructor(private formbulider: FormBuilder,public dialog: MatDialog) { }

  ngOnInit() {
    this.resolutionForm = this.formbulider.group({
      project: [''],
      reason: [''],
      note: [''],
    });
  }
  cancel()
  {
    this.resolutionForm.reset();
  }
  Add()
  {
    // if(confirm("Your Dispute has been submitted successfully! We will respond shortly")) {
    // }
      let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          page: 'resolutioncenter'
        }
      });
  }

}
