import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'xb-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

  post = true;;
  isGridView = false;
  isPost = false;
  check = false;
  value = false;
  account = false;
  payment = false;
  my_post = false;
  bids = false;
  manage_posts = false;
  completed = false;
  personal = false;
  password = false;
  method = false;
  manage_pass = false;
  esig = false;
  resolution = false;
  calendar = false;
  help = false;
  history = false;
  active=false;
  active_project = false;
  currentRoute: any;
  constructor(private router: Router) {
    this.isPost = Boolean(localStorage.getItem('isPost'));
    console.log(this.isPost);
    console.log(router.url);
  }

  ngOnInit() {
    this.check = true;
    localStorage.setItem('consumer', 'true');
  }

  toggle(data) {
    if (data == 'post') {
      this.post = true;
      this.account = false;
      this.payment = false;
      this.calendar = false;
      this.help = false;
    }
    else if (data == 'account') {
      this.account = true;
      this.post = false;
      this.payment = false;
      this.calendar = false;
      this.help = false;
    }
    else if (data == 'calendar') {
      this.calendar = true;
      this.post = false;
      this.account = false;
      this.payment = false;
      this.help = false;
    }
    else if (data == 'help') {
      this.help = true;
      this.payment = false;
      this.post = false;
      this.account = false;
      this.calendar = false;
    }
    else {
      this.payment = true;
      this.post = false;
      this.account = false;
      this.calendar = false;
      this.help = false;
    }
  }

  Toggle(value: any) {
    if (value == 'my_post') {
      this.my_post = true;
    }
    else if (value == 'bids') {
      this.bids = true;
    }
    else if (value == 'manage_posts') {
      this.manage_posts = true;
    }
    else if (value == 'completed') {
      this.completed = true;
    }

    else if (value == 'personal') {
      this.personal = true;
    }
    else if (value == 'passowrd') {
      this.password = true;
    }
    else if (value == 'method') {
      this.method == true;
    }
    else if (value == 'manage_pass') {
      this.manage_pass = true;
    }
    else if (value == 'esig') {
      this.esig = true;
    }
    else if (value == 'history') {
      this.history = true;
    }
    else if (value == 'resolution') {
      this.resolution = true;
    }
  }

  Card() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute)
    if(this.currentRoute == '/consumer/post'){
      this.router.navigateByUrl('/consumer/myposts_card');
      this.my_post = true;
      this.bids = false;
      this.manage_posts = false;
      this.completed = false;
      this.isGridView = false;
    }
    else if(this.currentRoute == '/consumer/managebids'){
      this.router.navigateByUrl('/consumer/managebids_card');
      this.bids = true;
      this.manage_posts = false;
      this.completed = false;
      this.my_post = false;
      this.isGridView = false;
    }
    else if(this.currentRoute == '/consumer/manageposts'){
      this.router.navigateByUrl('/consumer/cardposts');
      this.manage_posts = true;
      this.my_post = false;
      this.bids = false;
      this.completed = false;
      this.isGridView = false;
    }
    else if(this.currentRoute = '/consumer/completedprojects'){
      this.router.navigateByUrl('/consumer/completedprojects_card');
      this.completed = true;
      this.my_post = false;
      this.bids = false;
      this.manage_posts = false;
      this.isGridView = false;
    }
  
  
  }

  Grid() {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
    if(this.currentRoute == '/consumer/myposts_card'){
      this.router.navigateByUrl('/consumer/post');
      this.my_post = true;
      this.bids = false;
      this.manage_posts = false;
      this.completed = false;
      this.isGridView = true;
    }
    else if(this.currentRoute == '/consumer/managebids_card'){
      this.router.navigateByUrl('/consumer/managebids');
      this.bids = true;
      this.manage_posts = false;
      this.completed = false;
      this.my_post = false;
      this.isGridView = true;
    }
    else if(this.currentRoute == '/consumer/cardposts'){
      this.router.navigateByUrl('/consumer/manageposts');
      this.manage_posts = true;
      this.my_post = false;
      this.bids = false;
      this.completed = false;
      this.isGridView = true;
    }
    else if(this.currentRoute = '/consumer/completedprojects_card'){
      this.router.navigateByUrl('/consumer/completedprojects');
      this.completed = true;
      this.my_post = false;
      this.bids = false;
      this.manage_posts = false;
      this.isGridView = true;
    }
  }

}
