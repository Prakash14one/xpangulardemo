import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ESignatureComponent } from '../../../../shared/_components/e-signature/e-signature.component';
import { BidListDialogBoxComponent } from '../../../../shared/_components/bidlistdialogbox/bidlistdialogbox.component';

@Component({
  selector: 'xb-completeprojects',
  templateUrl: './completeprojects.component.html',
  styleUrls: ['./completeprojects.component.scss']
})
export class CompleteprojectsComponent implements OnInit {

  completedprojects:any;
  constructor(private service: ProjectsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getCompleteProjects().subscribe(res=>{
      console.log(res);
      this.completedprojects = res.results;
    })
  }

  onsignaturePopup()
  {
    let dialogRef = this.dialog.open(ESignatureComponent,{

    });
  }
  onListPopUp(projectId) {
    let dialogRef = this.dialog.open(BidListDialogBoxComponent, {

      data: {
        projectId: projectId
      }
    });
  }

}
