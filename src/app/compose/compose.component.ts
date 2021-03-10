import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

  composeForm = new FormGroup({
    receiver: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  });
  output: any;
  constructor(private authService: AuthService, private router: Router, private alerts: AlertsService) { }

  ngOnInit(): void {
  }

  composeMessage(){
      this.authService.composeMessage(this.composeForm.value).subscribe((data: any)  => {
        this.alerts.setMessage('The message is sent successfully!','success');
        setTimeout(()=>{
          this.router.navigate(['/sent-messages']);
     }, 2000);

      });
  }
}
