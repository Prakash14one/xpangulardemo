import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import{ AttachSignatureComponent } from '../../landing/attach-signature/attach-signature.component'; 
@Component({
  selector: 'xb-e-signature',
  templateUrl: './e-signature.component.html',
  styleUrls: ['./e-signature.component.scss']
})
export class ESignatureComponent implements OnInit {

  spid = new FormControl('', [
    Validators.required
  ])
  signatureImage: any;
  view = true;
  rating:any;
  esg: FormGroup
  constructor(public dialogRef: MatDialogRef<ESignatureComponent>, public dialog: MatDialog,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.esg = this.formBuilder.group({
      spid: this.spid,
      
    });
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
  Submit() {
    if (this.esg.valid) {
      console.log('form submitted');
    }
    else {
      Object.keys(this.esg.controls).forEach(field => { // {1}
        const control = this.esg.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }

}
