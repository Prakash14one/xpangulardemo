import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from '../../../components/services/projects.service';

@Component({
  selector: 'xb-bidlistdialogbox',
  templateUrl: './bidlistdialogbox.component.html',
  styleUrls: ['./bidlistdialogbox.component.scss']
})
export class BidListDialogBoxComponent implements OnInit {
  element: any;
  imageResults: any;
  constructor(private _projectsService: ProjectsService,
    public dialogRef: MatDialogRef<BidListDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public service, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
    this._projectsService.getProjectDetailinfo(this.data.projectId.id).subscribe(res => {
      console.log(res);
      this.element = res;
    });
    this._projectsService.getProjectImages(this.data.projectId.id).subscribe(res => {
      console.log(res.results);
      this.imageResults = res.results;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
