import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xb-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggle(id, id2,id3) {
    var n = document.getElementById(id);
    var classNme = document.getElementById(id2).getAttribute('class');
    var element = document.getElementById(id2);
    var header=document.getElementById(id3);
    if(classNme.includes('show')){
      element.classList.remove("show");
      header.classList.add("collapsed");
    }
    else {
      element.classList.add("show");
      header.classList.remove("collapsed");
    }
  }
}