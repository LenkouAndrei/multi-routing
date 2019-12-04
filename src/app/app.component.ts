import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public messagesService: MessagesService,
    private router: Router,
  ) { }

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messagesService.isDisplayed = true;
  }

  public onActivate($event): void {
    console.log('Activated Component', $event);
  }

  public onDeactivate($event): void {
    console.log('Deactivated Component', $event);
  }
}
