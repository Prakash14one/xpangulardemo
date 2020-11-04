import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProjectsService } from 'src/app/components/services/projects.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'xb-manage-bids-card',
  templateUrl: './manage-bids-card.component.html',
  styleUrls: ['./manage-bids-card.component.scss']
})
export class ManageBidsCardComponent implements OnInit {

  isGridView = false;
  elements: any;
  bidelements: any;
  currencySymbol: any = '$';
  totalcount: any;
  constructor(public dialog: MatDialog, private _projectsService: ProjectsService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.main_box_body .slide_icon').click(function () {
        $(this).next(".slide_list").toggle("slide");
      });
    });
    this._projectsService.getbiddata().subscribe(res => {
      console.log(res);
      this.elements = res.results;
      this._projectsService.getProjectBid(this.elements[0].id).subscribe(res => {
        this.bidelements = res.results;
        this.totalcount = res.totalCount;
        //this.accordin();
      });
    });
  }

}
