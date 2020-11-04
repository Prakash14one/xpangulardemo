import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'xb-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  $videoSrc: any;
  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('.video-btn').click(function () {
        this.$videoSrc = $(this).data("src");
      });
      console.log(this.$videoSrc);
      $('#myModal').on('shown.bs.modal', (e) => {
        $('#video').attr('src', this.$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1")
      })
      $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src', this.$videoSrc);
      });
    });
  }

}
