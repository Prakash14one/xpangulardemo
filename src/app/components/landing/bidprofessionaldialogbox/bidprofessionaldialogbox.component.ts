import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { ProviderActiveSowDialogComponent } from 'src/app/shared/_components/provider-active-sow-dialog/provider-active-sow-dialog.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'xb-bidprofessionaldialogbox',
  templateUrl: './bidprofessionaldialogbox.component.html',
  styleUrls: ['./bidprofessionaldialogbox.component.scss']
})
export class BidProfessionalDialogBoxComponent implements OnInit {
  model: any; //ConsumerStatementOfWork TODO create model or class for consumer bid sow
  isUpdate: false;
  constructor(private _projectsService: ProjectsService,
    public dialogRef: MatDialogRef<ProviderActiveSowDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { projectId: string; bidId: string }
  ) { }

  ngOnInit() {
    // this._projectsService.getsowData(this.data.projectId).subscribe(res => {
    //   this.model = res;
    //   console.log(res);
    // });

  }
  close(){
    this.dialogRef.close();
  }
}
