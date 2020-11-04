import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BidListDialogBoxComponent } from '../../../../shared/_components/bidlistdialogbox/bidlistdialogbox.component';
import { PostEditComponent } from '../../../../shared/_components/post-edit/post-edit.component';

@Component({
  selector: 'xb-consumer-post',
  templateUrl: './consumer-post.component.html',
  styleUrls: ['./consumer-post.component.scss']
})
export class ConsumerPostComponent implements OnInit {

  isGridView = false;

  myPosts: any = [];
  mypost : any;

  constructor(private readonly _projectsService: ProjectsService,public dialog: MatDialog) {

    // this._projectsService.getConsumerProjects(1).subscribe( result => {
    //   console.log(result);
    //   this.myPosts = result.results;
    //   console.log(this.myPosts);
      
    // });

  }

  ngOnInit() {
    localStorage.setItem('isPost','false');
    this._projectsService.getmyposts().subscribe(res=>{
      console.log(res);
      this.mypost = res.results;
    })
  }
  onListPopUp(projectId) {
    let dialogRef = this.dialog.open(BidListDialogBoxComponent, {

      data: {
        projectId: projectId
      }
    });
  }
  editPopup(post){
    let dialogRef = this.dialog.open(PostEditComponent, {
      data:{
        postData:post
      }
    });
  }
}
