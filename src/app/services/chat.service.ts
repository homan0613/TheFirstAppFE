import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder, HttpTransportType,LogLevel } from '@microsoft/signalr';
import { MessagePackHubProtocol } from '@microsoft/signalr-protocol-msgpack';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private hubConnection: HubConnection
  public messages: Message[] = [];
  public userName = localStorage.getItem("userName")? localStorage.getItem("userName"):"";
  // private connectionUrl = new WebSocket('wss://https:// localhost:5000/ChatHubcs');
  private connectionUrl = 'http://localhost:5000/ChatHubcs';
  private apiUrl = 'http://localhost:5000/api/chat';
  constructor(private http: HttpClient) { }

  public connect = () => {
    this.startConnection();
    this.addListeners();
  }

  public sendMessageToApi(messageIP: string) {
    var messageToSend = new Message(0,0,'a',"test", messageIP, "current date")
    return this.http.post(this.apiUrl, messageToSend)
      .pipe(tap(_ => console.log("message sucessfully sent to api controller")));
  }

  public sendMessageToHub(message: string) {
    //var messageToSend = new Message(0, 0, "test", message, "current date")
    var accountId = '0';
    var date = new Date().toString()
    var promise = this.hubConnection.invoke("send",this.userName, accountId, message, date)
      .then(() => { console.log('message sent successfully to hub'); })
      .catch((err) => console.log('error while sending a message to hub: ' + err));

    return from(promise);
  }

  private getConnection(): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .configureLogging(LogLevel.Error)
      .withHubProtocol(new MessagePackHubProtocol())
      .build();
  }

  private buildChatMessage(message: string):any {
    return {
      Id:0,
      AccountId: this.hubConnection.connectionId == null? '' : this.hubConnection.connectionId,
      //accountname: "",
      Type: '',
      Messages: message == null? '' : message,
      date: new Date().toDateString()
    };
  }

  private startConnection() {
    this.hubConnection = this.getConnection();

    this.hubConnection.start()
      .then(() => console.log('connection started'))
      .catch((err) => console.log('error while establishing signalr connection: ' + err))
  }

  private addListeners() {
    this.hubConnection.on("messageReceivedFromApi", (data: Message) => {
      console.log("message received from API Controller")
      this.messages.push(data);
    })
    this.hubConnection.on("messageReceivedFromHub", (accountName, message, date) => {
      console.log("message received from Hub")
      var data = new Message(0, 0,accountName, "", message, date)
      this.messages.push(data);
    })
    this.hubConnection.on("newUserConnected", _ => {
      console.log("new user connected")
    })
  }
}
