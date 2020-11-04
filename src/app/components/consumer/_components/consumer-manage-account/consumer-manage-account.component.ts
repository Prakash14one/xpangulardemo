import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { EditProfileComponent } from '../../../../shared/_components/edit-profile/edit-profile.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'xb-consumer-manage-account',
  templateUrl: './consumer-manage-account.component.html',
  styleUrls: ['./consumer-manage-account.component.scss']
})
export class ConsumerManageAccountComponent implements OnInit {

  account: any;
  firstName: any;
  lastName: any;
  email: any;
  constructor(private service: ProjectsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getAccountdata().subscribe(res => {
      console.log(res);
      this.account = res.details;
      this.firstName = this.account.firstName;
      this.lastName = this.account.lastName;
      this.email = this.account.email;
    })
  }
  show() {
    let dialogRef = this.dialog.open(EditProfileComponent, {
      data: {
        accountdata: this.account
      }
    });
  }

}
