import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xb-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss']
})
export class HowToComponent implements OnInit {

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
