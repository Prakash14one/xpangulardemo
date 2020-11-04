import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ESignatureComponent } from '../../../../shared/_components/e-signature/e-signature.component';
@Component({
  selector: 'xb-consumer-e-signature',
  templateUrl: './consumer-e-signature.component.html',
  styleUrls: ['./consumer-e-signature.component.scss']
})
export class ConsumerESignatureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onsignaturePopup()
  {
    let dialogRef = this.dialog.open(ESignatureComponent,{

    });
  }

}
