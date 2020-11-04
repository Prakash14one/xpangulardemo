import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'xb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  value : any;
  constructor() {}
  ngOnInit(){
    localStorage.setItem('value','false');
  }
}
