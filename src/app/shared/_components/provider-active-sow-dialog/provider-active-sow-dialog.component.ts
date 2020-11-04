import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'xb-provider-active-sow-dialog',
  templateUrl: './provider-active-sow-dialog.component.html',
  styleUrls: ['./provider-active-sow-dialog.component.scss'],
})
export class ProviderActiveSowDialogComponent implements OnInit {
  model: {}; //ConsumerStatementOfWork TODO create model or class for consumer bid sow
  isUpdate: false;
  constructor(
    public dialogRef: MatDialogRef<ProviderActiveSowDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: string; bidId: string }
  ) {}

  ngOnInit() {}
}
