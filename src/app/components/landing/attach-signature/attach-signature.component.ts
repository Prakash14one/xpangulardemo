import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'xb-attach-signature',
  templateUrl: './attach-signature.component.html',
  styleUrls: ['./attach-signature.component.scss']
})
export class AttachSignatureComponent implements OnInit {

  signatureImage: any;

  constructor(public dialogRef: MatDialogRef<AttachSignatureComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  showImage(data) {
    this.signatureImage = data;
    console.log(this.signatureImage);
    this.dialogRef.close(this.signatureImage);
  }

}
