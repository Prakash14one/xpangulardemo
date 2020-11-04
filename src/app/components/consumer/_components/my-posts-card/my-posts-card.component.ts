import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
@Component({
  selector: 'xb-my-posts-card',
  templateUrl: './my-posts-card.component.html',
  styleUrls: ['./my-posts-card.component.scss']
})
export class MyPostsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.main_box_body .slide_icon').click(function () {
          $(this).next(".slide_list").toggle("slide");
      });
  });
  }

}
