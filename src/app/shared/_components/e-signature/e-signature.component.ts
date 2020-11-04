import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import{ AttachSignatureComponent } from '../attach-signature/attach-signature.component'; 
@Component({
  selector: 'xb-e-signature',
  templateUrl: './e-signature.component.html',
  styleUrls: ['./e-signature.component.scss']
})
export class ESignatureComponent implements OnInit {

  signatureImage: any;
  view = true;
  rating:any;
  constructor(public dialogRef: MatDialogRef<ESignatureComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  attach()
  {
    let dialogRef = this.dialog.open(AttachSignatureComponent);
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      this.view = false;
      this.signatureImage = res;
    })
    console.log(this.signatureImage)
  }

  rate(event){
    console.log(event);
    this.rating = event;
  }

}
