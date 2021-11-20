import { Component, ElementRef } from '@angular/core';
import { Router,NavigationEnd, Event   } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheFirstAppFE';
  isLoaded: boolean;
  isDisplayClass: boolean;

  constructor(private router: Router, private el: ElementRef){
    console.log(this.router.url);
    router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          var url = '';
            console.log((event as NavigationEnd).url);
            url = (event as NavigationEnd).url;
            if(url === "/login" || url === "/signup"|| url === "/"){
              this.isLoaded = true;
              this.isDisplayClass = false;
            }else{
              this.isLoaded = false;
              this.isDisplayClass = true;

            }
        });
  }
}
