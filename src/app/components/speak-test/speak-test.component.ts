import { Component, NgZone, OnInit, ChangeDetectorRef,  ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { LCtest } from 'src/app/models/lctest';

//this use for record void and change it to text
const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const SpeechGrammarList = (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = true;
@Component({
  selector: 'app-speak-test',
  templateUrl: './speak-test.component.html',
  styleUrls: ['./speak-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SpeakTestComponent implements OnInit {
	voiceText: any = '';
  @Input() 
  public sampleText: string = '';
  public IsSpeakTest: any = false;
  test : LCtest[] = [];

  constructor(public cdRef: ChangeDetectorRef,public NgZone: NgZone, private actRoute: ActivatedRoute){}

  ngOnInit(): void {
    let timer = Observable.timer(2000, 5000);
    let id: any = this.actRoute.snapshot.paramMap.get('id');
    if(!id){
      this.IsSpeakTest= true;
      this.sampleText="American colleges are under pressure to protect students against COVID-19 as the new school year is about to start in autumn. The decision on how far to go will depend on legal and political issues as well as the rising infection rates.";
    }
    timer.subscribe(() =>  recognition.onresult =  (event:any)=> {
          let command = event.results[0][0].transcript;
          let isFinal = event.results[0].isFinal;
          if(isFinal){
            console.log(command);
            this.voiceText +=  command +" ";
          }
          //importent note
          //this line help reload data and page if data change
          //when command change => update (i guess) => change voice => show data in view
          this.cdRef.detectChanges();
    });
    console.log("voiceText: ", this.voiceText);
  }

  startListen(){
    recognition.start();
  }

  stopListen(){
    recognition.stop();
  }

  CheckListen(){
    this.test = [];
    var lsUserAnswer = this.voiceText.split(' ');
    var lsResult = this.sampleText.split(' ');

    lsResult.forEach((rsValue, i) =>{
      if(typeof(lsUserAnswer[i]) !== "undefined"){
        if(rsValue.toLocaleLowerCase() != lsUserAnswer[i].toLocaleLowerCase()){
          this.test.push(new LCtest(i, "error", rsValue + " "));
        }else{
          this.test.push(new LCtest(i, "correct", rsValue + " "));
        }
      }else{
        this.test.push(new LCtest(i, "error", rsValue + " "));
      }
    })
  }

  refreshInput(){
    this.voiceText="";
  }

}
