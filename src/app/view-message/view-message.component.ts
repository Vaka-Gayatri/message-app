import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Message } from '../models/compose-message';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.css']
})
export class ViewMessageComponent implements OnInit {
  message_id: any;
  message: any;
  loader: boolean = true;


  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private alerts: AlertsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.message_id = +params['id'];
   });

   this.getMessageById();
  }

  async getMessageById(){
     this.loader = false;
    await this.authService.getMessageById(this.message_id).subscribe(data => {
      this.message = JSON.parse(JSON.stringify(data));
      this.loader = true;
  });

   }

   deleteMessage(message_id: any){
    this.authService.deleteMessages(message_id).subscribe(data => {
      this.alerts.setMessage('The message is deleted successfully!','success');
        setTimeout(()=>{
          this.router.navigateByUrl('/messages')
     }, 2000);

   });
   }
}
