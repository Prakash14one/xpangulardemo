// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'xb-activeproject',
//   templateUrl: './activeproject.component.html',
//   styleUrls: ['./activeproject.component.scss']
// })
// export class ActiveprojectComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProjectsService } from '../../../services/projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'xb-active-projects-card',
  templateUrl: './active-projects-card.component.html',
  styleUrls: ['./active-projects-card.component.scss']
})
export class ActiveProjectsCardComponent implements OnInit {

  constructor(private service: ProjectsService, public dialog: MatDialog) { }

  ngOnInit() {
   
  }

}
