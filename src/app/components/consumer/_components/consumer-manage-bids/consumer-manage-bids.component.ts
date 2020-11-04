import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/components/services/projects.service';
import { MatDialog } from '@angular/material';
import { BidProfessionalDialogBoxComponent } from '../../../../shared/_components/bidprofessionaldialogbox/bidprofessionaldialogbox.component';
import { tr, de } from 'date-fns/locale';
import { BidMessageDialogBoxComponent } from '../../../../shared/_components/bidmessagedialogbox/bidmessagedialogbox.component';
import { BidProfileComponent } from '../../../../shared/_components/bid-profile/bid-profile.component';
import {BidDetailsComponent} from '../../../../shared/_components/bid-details/bid-details.component';
import { BidListDialogBoxComponent } from '../../../../shared/_components/bidlistdialogbox/bidlistdialogbox.component';
import * as $ from 'jquery';


@Component({
  selector: 'xb-consumer-manage-bids',
  templateUrl: './consumer-manage-bids.component.html',
  styleUrls: ['./consumer-manage-bids.component.scss']
})
export class ConsumerManageBidsComponent implements OnInit {
  isGridView = false;
  elements: any;
  bidelements: any;
  currencySymbol: any = '$';
  val: number = 0;
  show: boolean = false;
  isDesc: boolean = false;
  column: string = 'providerFirstName';
  direction: number; totalcount: any;
  constructor(public dialog: MatDialog, private _projectsService: ProjectsService) { localStorage.setItem('isPost', 'false'); }

  ngOnInit() {
    this._projectsService.getbiddata().subscribe(res => {
      console.log(res);
      this.elements = res.results;
    });
  }
  
  sort(property) {
    this.isDesc = !this.isDesc; //change the direction 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  onprofessionalPopUp() {
    let dialogRef = this.dialog.open(BidProfessionalDialogBoxComponent, {
    });
  }
  loadProjectBid(id, i) {
    this.bidelements = null;
    this.show = !this.show;
    this._projectsService.getProjectBid(id).subscribe(res => {
      console.log(res);
      this.val = i;
      this.bidelements = res.results;
      this.totalcount = res.totalCount;
      console.log(this.totalcount);
      //this.assignCss(i);
    });
  }

  afterPanelOpened(event){
    console.log(event);
  }

  onmszPopUp(projectId, providerId) {
    let dialogRef = this.dialog.open(BidMessageDialogBoxComponent, {
      data: {
        projectId: projectId,
        providerId: providerId
      }
    });
  }

  onListPopUp(bid) {
    let dialogRef = this.dialog.open(BidDetailsComponent, {

      data: {
        bid: bid
      }
    });
  }

  openDetailDialogBox(be): void {
    this.dialog.open(BidProfileComponent, {
      data: be
    });
  }

  viewbid(be){
    this.dialog.open(BidListDialogBoxComponent,{
      data: {
        projectId: be
      }
    })
  }
}

