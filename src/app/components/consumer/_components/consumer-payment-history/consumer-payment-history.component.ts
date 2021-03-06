import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xb-consumer-payment-history',
  templateUrl: './consumer-payment-history.component.html',
  styleUrls: ['./consumer-payment-history.component.scss']
})
export class ConsumerPaymentHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  print() {
    let printContents, popupWin;
    printContents = document.getElementById('print-contents').innerHTML;
    popupWin = window.open('', '_blank', 'top=auto,left=auto,height=auto,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
            <head>
              <title>Invoice</title>
              <style>
              //........Customized style.......
              </style>
            </head>
            <body onload="window.print();window.close()">${printContents}</body>
          </html>`
    );
    popupWin.document.close();
}

}
