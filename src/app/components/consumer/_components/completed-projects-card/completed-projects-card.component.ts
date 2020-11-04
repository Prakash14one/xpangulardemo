import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProjectsService } from '../../../services/projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'xb-completed-projects-card',
  templateUrl: './completed-projects-card.component.html',
  styleUrls: ['./completed-projects-card.component.scss']
})
export class CompletedProjectsCardComponent implements OnInit {

  completedprojects:any;
  constructor(private service: ProjectsService, public dialog: MatDialog) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.main_box_body .slide_icon').click(function () {
        $(this).next(".slide_list").toggle("slide");
      });
    });
    this.service.getCompleteProjects().subscribe(res=>{
      console.log(res);
      this.completedprojects = res.results;
    })
  }

}
