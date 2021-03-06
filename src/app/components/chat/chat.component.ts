import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'chat-ui';
  text: string = "";
  constructor(public ChatService: ChatService) { }

  ngOnInit(): void {
    this.ChatService.connect();
  }

    sendMessage(): void {
      // this.signalRService.sendMessageToApi(this.text).subscribe({
      //   next: _ => this.text = '',
      //   error: (err) => console.error(err)
      // });

      this.ChatService.sendMessageToHub(this.text).subscribe({
        next: _ => this.text = '',
        error: (err) => console.error(err)
      });
  }
}
