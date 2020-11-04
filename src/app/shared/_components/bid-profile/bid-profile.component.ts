import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { ProjectsService } from 'src/app/components/services/projects.service';


@Component({
  selector: 'xb-bid-profile',
  templateUrl: './bid-profile.component.html',
  styleUrls: ['./bid-profile.component.scss']
})
export class BidProfileComponent implements OnInit {

  serviceProf: any;
  bidDetail:  any;
  constructor(
    public dialogRef: MatDialogRef<BidProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjectBid(this.data.projectId).subscribe(res=>{
      console.log(res.results);
      this.serviceProf = res.results;
      console.log(this.serviceProf);
      for (let i=0;i<this.serviceProf.length;i++) {
        if (this.data.providerLastName == this.serviceProf[i].providerLastName) {
          this.bidDetail = this.serviceProf[i];
        }
      }
      console.log(this.bidDetail);
    })
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}