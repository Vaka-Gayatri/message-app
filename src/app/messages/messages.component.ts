import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  allMessages: any;
  isEmpty: boolean = false;

  constructor(private authService: AuthService, private router: Router, private alerts: AlertsService) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(){
     this.authService.getMessages().subscribe(data => {

       this.allMessages = JSON.parse(JSON.stringify(data));
       if(this.allMessages.length <= 0){
       this.isEmpty = true;
       } else {
        this.isEmpty = false;
       }

    });
  }


  deleteInboxMessage(message_id: any){
    this.authService.deleteMessages(message_id).subscribe(data => {
      this.alerts.setMessage('The message is deleted successfully','success');
      this.getAllMessages();
   });
   }

   getMessageById(message_id: any){
    this.router.navigate(['/view-message', message_id])
   }

}
