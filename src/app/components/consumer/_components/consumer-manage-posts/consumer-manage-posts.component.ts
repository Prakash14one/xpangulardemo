import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BidListDialogBoxComponent } from '../../../../shared/_components/bidlistdialogbox/bidlistdialogbox.component';
import { ProjectsService } from 'src/app/components/services/projects.service';
import { BidMessageDialogBoxComponent } from '../../../../shared/_components/bidmessagedialogbox/bidmessagedialogbox.component';
import { BidAppointmentDialogBoxComponent } from '../../../../shared/_components/bidappointmentdialogbox/bidappointmentdialogbox.component';
import { BidSowDialogBoxComponent } from '../../../../shared/_components/bidsowdialogbox/bidsowdialogbox.component';
import { ConfirmationDialogComponent } from '../../../../shared/_components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'xb-consumer-manage-posts',
  templateUrl: './consumer-manage-posts.component.html',
  styleUrls: ['./consumer-manage-posts.component.scss']
})
export class ConsumerManagePostsComponent implements OnInit {
  isGridView = false;
  elements: any;
  currencySymbol: string = '$';
  constructor(public dialog: MatDialog, private _projectsService: ProjectsService) {  localStorage.setItem('isPost','true');}

  ngOnInit() {
   
    this._projectsService.getConsumerManagePosts().subscribe(res => {
      this.elements = res.results;
      console.log(this.elements);
    });
  }
  onListPopUp(projectId) {
    let dialogRef = this.dialog.open(BidListDialogBoxComponent, {

      data: {
        projectId: projectId
      }
    });
  }
  onmszPopUp(projectId, providerId) {
    let dialogRef = this.dialog.open(BidMessageDialogBoxComponent, {
      data: {
        projectId: projectId,
        providerId: providerId
      }
    });
  }
  onappoinmentPopUp() {
    let dialogRef = this.dialog.open(BidAppointmentDialogBoxComponent, {
    });
  }
  onSowPopUp(projectId) {
    let dialogRef = this.dialog.open(BidSowDialogBoxComponent, {
      data: {
        projectId: projectId
      }
    });
  }
  onCancelPopUp(percentage, amount) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        percentage: percentage,
        amount: amount,
        page: 'ManagePosts'
      }
    });
  }
}
