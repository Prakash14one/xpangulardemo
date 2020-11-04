import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { ProviderActiveSowDialogComponent } from 'src/app/shared/_components/provider-active-sow-dialog/provider-active-sow-dialog.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'xb-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  message: string = "Are you sure you want to cancel your project? Your service professional have completed % of service. Your refund balance is $"
  confirmButtonText = "Submit"
  cancelButtonText = "Cancel"
  currencySymbol: any = "$";
  show: boolean= false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      if (data.page === 'ManagePosts') {
        let remainingAmount = data.amount - (data.amount * data.percentage / 100);
        this.message = 'Are you sure you want to cancel your project? Your service professional have completed ' + data.percentage + '% of service. Your refund balance is ' + this.currencySymbol + remainingAmount;
        this.confirmButtonText = this.confirmButtonText;
        this.cancelButtonText = this.cancelButtonText;
        this.show=true;
      }
      else if (data.page === 'resolutioncenter') {
        this.message = 'Your Dispute has been submitted successfully! We will respond shortly';
        this.confirmButtonText = 'Ok';
        this.show=false;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit() {

  }
}
