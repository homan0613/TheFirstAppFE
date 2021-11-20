import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/services/stories.service';
import { Story } from 'src/app/models/story';
import { ActivatedRoute } from '@angular/router';
import { LCtest } from 'src/app/models/lctest';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  constructor( public service: StoryService, private actRoute: ActivatedRoute) { }

  Story : Story = new Story();
  testParagraph!: string;
  id: any = this.actRoute.snapshot.paramMap.get('id');
  test : LCtest[] = [];
  textColor: string = "black";
  curInputCheck: any = 0;
  lsSrcAudios : string []=[];
  SrcAudio : string ='';
  isSpeakTest : any= false;
  rsList : any = [];

  ngOnInit(): void {
    this.getStoryById();
    this.getAudioById(this.id);
  }

  getStoryById(){
    this.service.getStoryById(this.id).subscribe(
      story => {
        this.Story = story as Story;
        this.createTest(this.Story?.content);
      }
    )
  }

  createTest(content:string){
    var lspara = content.split(/(?:\r\n|\r|\n)/g);
  
    this.testParagraph = this.getRandomParagraph(lspara);
    this.getRandomWords(this.testParagraph);
  }

  createRandomList(lsWords : any){
    var randomLength = Math.floor(Math.random() * (Math.floor(lsWords.length/3))) + 1 ;
    var randomLs = [];
    for(var i=0; i< randomLength; i++){
      randomLs.push(Math.floor(Math.random() * (lsWords.length)));
    }
    return randomLs.sort(function(a, b){return a - b});
  }
  getRandomWords(paragraph:string){
    var lsWords = paragraph.split(' ');
    var randomWord = this.createRandomList(lsWords);
    var lable = '';
    var j = 0;

    for(var i =0 ; i< lsWords.length; i++){
      var input  = new LCtest();
        if(i == randomWord[j]){
          input.id = i;
          input.type = 'input';
          input.value = lsWords[i];
          if(lable!=''){
            var tmpLable = new LCtest(0, 'lable', lable);
            this.test.push(tmpLable);
            lable = '';
          }
          this.test.push(input);
          j++;
        }else{
          lable = lable + lsWords[i] + ' ';
        }
      if(i == lsWords.length -1){
        var tmpLable = new LCtest(0, 'lable', lable);
        this.test.push(tmpLable);
      }
    }
    console.log(this.test);
  }

  getRandomParagraph(lsParagraph : any){
    var lsLength = lsParagraph.length;
    var randomPara = Math.floor(Math.random() * (lsLength - 1 + 1));

    for (var i = 0; i < lsLength; i++ ){
      if(lsParagraph[i].trim() != ''){
        if(!lsParagraph[i].includes('img')){
          break;
        }
        if(i == lsLength -1 ){
          return '';
        }
      }
    }

    while(0 == 0){
      if(lsParagraph[randomPara].trim() != ''){
        if(!lsParagraph[randomPara].includes('img')){
            break;
        }
      }
      randomPara = Math.floor(Math.random() * (lsLength - 1 + 1)) + 1 ;
    }

    var tmp = lsParagraph[randomPara];
    return lsParagraph[randomPara];
  }

  onChange(e:any, value: any){
    var target = e.target.value;
    console.log(value);
    this.curInputCheck = value.id;

    if(target != value.value){
      this.textColor = "red";
    }else{
      if(!this.rsList.includes(value.id)){
        this.rsList.push(value.id);
      }
      this.textColor = "green";
    }
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

  CheckResult(){
    var answerLs = this.test.filter(x => x.type == 'input');
    if(answerLs.length === this.rsList.length){
      this.isSpeakTest = true;
    }else{
      alert("please check result again!!!!!");
      this.isSpeakTest = false;
    }
  }
}
