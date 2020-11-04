import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from '../../../components/services/projects.service';

@Component({
  selector: 'xb-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.scss']
})
export class BidDetailsComponent implements OnInit {

  sowVersions: any = [];
  sowPhases: any = [];
  totalTime:any = 0;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: ProjectsService,
    public dialogRef: MatDialogRef<BidDetailsComponent>) { }

  ngOnInit() {
    console.log(this.data);
    this.service.getsowData(this.data.bid.projectId).subscribe(res => {
      this.sowVersions = res.sowVersions;
      this.sowPhases = this.sowVersions[0].sowPhases;
      console.log(this.sowPhases);
      for(let i=0;i<this.sowPhases.length;i++){
        this.totalTime += this.sowPhases[i].hours;
      }
    })
    this.service.getCompletedSow().subscribe(res=>{
      console.log(res);
      this.sowVersions = res.results[0].sowVersions;
      this.sowPhases = this.sowVersions[0].sowPhases;
      console.log(this.sowPhases);
      for(let i=0;i<this.sowPhases.length;i++){
        this.totalTime += this.sowPhases[i].hours;
      }
    })
  }

  OnNoClick() {
    this.dialogRef.close();
  }

  // materialsChanged() {
  //   if (this.materialsSelection == 1) {
  //     this.materialsPrice = 700;
  //   }
  //   else if (this.materialsSelection == 2) {
  //     this.materialsPrice = 500;
  //   }
  //   else if (this.materialsSelection == 3) {
  //     this.materialsPrice = 1200;
  //   }
  //   else {
  //     this.materialsPrice = 0;
  //   }
  // }

  // firepitSelectionChanged() {
  //   if (this.isOption1Selected) {
  //     this.firepitPrice = 700;
  //     this.firepitToW = 1;
  //   }
  //   else {
  //     this.firepitPrice = 0;
  //     this.firepitToW = 0;
  //   }
  // }

  // lightSelectionChanged() {

  //   if (this.isLightSelected) {
  //     this.lightsChanged();
  //   }
  //   else {
  //     this.lightsPrice = 0;
  //     this.lightsToW = 0;
  //   }
  // }

  // lightsChanged() {
  //   if (this.lightsSelection == 1) {
  //     this.lightsPrice = 450;
  //     this.lightsToW = 2;
  //   }
  //   else if (this.lightsSelection == 2) {
  //     this.lightsPrice = 275;
  //     this.lightsToW = 1;
  //   }
  //   else {
  //     this.lightsPrice = 0;
  //     this.lightsToW = 0;
  //   }
  // }

}
