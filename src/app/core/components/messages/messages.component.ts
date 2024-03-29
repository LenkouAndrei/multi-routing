import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessagesService } from './../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  close() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messagesService.isDisplayed = false;
  }
}

