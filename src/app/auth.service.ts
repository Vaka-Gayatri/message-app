import { Injectable } from '@angular/core';
import { User } from './models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Headers } from '@angular/http';
import { AuthInterceptor } from './auth.interceptor';
import { Message } from './models/compose-message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient) { }

  // **********login API*********

  userAuth(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post('https://messaging-test.bixly.com/api-token-auth/', { username: user.username, password: user.password } , {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // ********** API to get messages inbox*********
  getMessages(){
    return this.httpClient.get('https://messaging-test.bixly.com/messages/')
  }

  // ********** API to compose message*********
  composeMessage(message: Message) {
    return this.httpClient.post('https://messaging-test.bixly.com/messages/', message);
  }



  // ********** API to get sent message*********
  getSentMessages(){
    return this.httpClient.get('https://messaging-test.bixly.com/messages/sent/')
  }

  // ********** API to delete messages*********
  deleteMessages(message_id:any){
    return this.httpClient.delete('https://messaging-test.bixly.com/messages/' + message_id +'/')
  }


  // ********** API to read message by id*********
  getMessageById(message_id: any){

    return this.httpClient.get('https://messaging-test.bixly.com/messages/' + message_id )
  }

}
