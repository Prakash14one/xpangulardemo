import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xb-consumer-nav-header',
  templateUrl: './consumer-nav-header.component.html',
  styleUrls: ['./consumer-nav-header.component.scss']
})
export class ConsumerNavHeaderComponent implements OnInit {
  isGridView = false;
  isPost = false;
  value: any;
  post = false;
  account = false;
  payment = false;


  constructor() {
    this.isPost = Boolean(localStorage.getItem('isPost'));
    console.log(this.isPost);
  }
  ngOnInit() {
    this.value = localStorage.getItem('nav');
    console.log(this.value);
    if (this.value == 'post') {
      this.post = true;
    }
    else if (this.value == 'account') {
      this.account = true;
    }
    else {
      this.payment = true;
    }
  }
}
