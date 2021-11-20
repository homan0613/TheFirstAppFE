import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-story-index',
  templateUrl: './story-index.component.html',
  styleUrls: ['./story-index.component.css']
})
export class StoryIndexComponent implements OnInit {

  constructor( private service : StoryService, private router: Router) { }

  StoriesList!: any;
  ngOnInit(): void {
    this.getAllStories();
  }
  getAllStories():void{
    this.service.getAllStory().subscribe(
      ls => {
        console.log(ls);
        this.StoriesList =  JSON.parse(JSON.stringify(ls));
      }
    )
  }
}
