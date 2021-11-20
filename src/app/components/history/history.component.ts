import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  id: any = this.actRoute.snapshot.paramMap.get('id');
  story : Story = new Story();
  constructor(public service: StoryService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStoryById();
  }

  
  getStoryById(){
    console.log(this.id);
    if(this.id === '0'){
      this.story = new Story();
    }else{
      this.service.getStoryById(this.id).subscribe(
        res =>{
          this.story =  res as Story;
          console.log(this.story);
          this.story.content = this.convertStringtoHtml(this.story.content);
          // console.log(this.story.content);

          // console.log(this.story.$content);
        }
      );
    }
  }

  convertStringtoHtml(content: string):string{
    if(content){
      var rlContent = content.replace(/(?:\r\n|\r|\n)/g, "<br>");
      var ls = rlContent.split("&&")
      var rs = "";
      for (var i = 0; i<ls.length; i++){
        var src = "";
        if(ls[i] != "img"){
          rs= rs + ls[i] +"\n";
        }

        if(ls[i] == "img" && ls[i+2] == "img"){
          src = '<br><img src="' + ls[i+1] + '" height="50%" width="70%"><br>"';
          i+=2;
          rs += src + "\n";
        }

        // if(ls[i] == "audio" && ls[i+2] == "audio"){
        //   src = '<audio controls>' +
        //           '<source src="'+ls[i+1]+'" type="audio/ogg">'+
        //         '</audio>';
        //   i+=2;
        //   rs += src + "\n";
        // }
      }
      rs = "<p>" + rs + "<\p>";
      console.log(rs);
      return rs.replace('/(?:\r\n|\r|\n)/g', '<\p><br><p>')
    }
    return '';
  }
}
