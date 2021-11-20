import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      var scrolling = false;
      $(document).ready(function(){
        scrolling = false;
      });

      $(window).on('scroll', function(){
        var body = document.body; //IE 'quirks'
        var document$ = document.documentElement; //IE with doctype
        document$ = (document$.clientHeight) ? document$ : body;

        console.log(document$.clientHeight);  

          if (document$.scrollTop == 0) {
            scrolling = false;
            $(".topheader").css("display", "inline-block");
            $(".menulist").removeClass('sticky');
            console.log(document$.scrollTop);
          } else{
            scrolling = true;
            $(".topheader").css("display", "none");
            $(".menulist").addClass('sticky');
          }
      });
    })(jQuery);
  }
}
