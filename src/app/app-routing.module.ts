import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ComposeComponent } from './compose/compose.component';
import { SentMessagesComponent } from './sent-messages/sent-messages.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'messages',
      component: MessagesComponent
    },
    {
      path: 'compose',
      component: ComposeComponent
    },
    {
      path: 'sent-messages',
      component: SentMessagesComponent
    },
    {
      path: 'view-message/:id',
      component: ViewMessageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
