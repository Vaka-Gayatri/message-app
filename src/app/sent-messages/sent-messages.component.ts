import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';
import { AuthService } from '../auth.service';
import { Message } from '../models/compose-message';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {
  sentMessages: any;
  output: any;
  isEmpty: boolean = false;

  constructor(private authService: AuthService, private router: Router, private alerts: AlertsService) { }

  ngOnInit(): void {
    this.getAllSentMessages()
  }


  getAllSentMessages(){
    this.authService.getSentMessages().subscribe(data => {
      this.sentMessages = data;
      if(this.sentMessages.length <= 0){
        this.isEmpty = true;
        } else {
         this.isEmpty = false;
        }
   });
 }

 deleteSentMessage(message_id: any){
  this.authService.deleteMessages(message_id).subscribe(data => {
    this.alerts.setMessage('The message is deleted successfully','success');
    this.getAllSentMessages();
 });
 }

 getMessageById(message_id: any){
  this.router.navigate(['/view-message', message_id])
 }

}
