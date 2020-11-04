import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'xb-bid-listbox',
  templateUrl: './bid-listbox.component.html',
  styleUrls: ['./bid-listbox.component.scss']
})
export class BidListboxComponent implements OnInit {

  element: any;
  imageResults: any;
  constructor(private _projectsService: ProjectsService,
    public dialogRef: MatDialogRef<BidListboxComponent>,
    @Inject(MAT_DIALOG_DATA) public service, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.projectId);
    this._projectsService.getProjectDetailinfo(this.data.projectId).subscribe(res => {
      console.log(res);
      this.element = res;
      console.log(this.element);
    });
    this._projectsService.getProjectImages(this.data.projectId).subscribe(res => {
      console.log(res.results);
      this.imageResults = res.results;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
