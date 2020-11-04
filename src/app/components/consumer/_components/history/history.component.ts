import { Component, OnInit } from '@angular/core';
import {ConsumerPaymentHistoryComponent} from '../../../../shared/_components/consumer-payment-history/consumer-payment-history.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'xb-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  oninvoicePopup(){
    let dialogRef = this.dialog.open(ConsumerPaymentHistoryComponent,{

    });
  }

}
