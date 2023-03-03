import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';

import { AuthService } from './core/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

  displayMessages() {
    this.router.navigate([{ outlets: { popup: ['message'] } }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
