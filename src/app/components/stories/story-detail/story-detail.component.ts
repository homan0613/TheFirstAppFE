import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
    id: any = this.actRoute.snapshot.paramMap.get('id');
    story : Story = new Story();
    image: string [];
    lsSrcImgs : string [] = [];
    lsSrcAudios : string [] = [];
    SrcAudio : any  = '';
    constructor(public service: StoryService, private router: Router, private actRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getImageById(this.id);
      this.getAudioById(this.id);
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
            src = '<br><img src="' + this.lsSrcImgs[0] + '" height="50%" width="70%"><br>"';
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
        return rs.replace('/(?:\r\n|\r|\n)/g', '<\p><br><p>')
      }
      return '';
    }

    getImageById(storyId:string){
      return this.service.getImageById(storyId).subscribe(
        (rs : any) =>{
            rs.forEach((img: any) => {
              this.lsSrcImgs.push(`${this.service.rootUrl}/${img.path}`);
            });
        }
      )
    }

    getAudioById(storyId:string){
      return this.service.getAudioById(storyId).subscribe(
        (rs : any) =>{
          console.log(rs);
            rs.forEach((aud: any) => {
              var pathAu = aud.path;
              //var pathAu = 'Resources/Audios/74df463d-027a-438c-9cf0-001ea4a70cff_hq.mp3';
              this.lsSrcAudios.push(`${this.service.rootUrl}/${pathAu}`);
            });
            this.SrcAudio = this.lsSrcAudios[0];
        }
      )
    }
  
  }