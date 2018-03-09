import { Component, Input, OnInit } from '@angular/core';

export interface FsChatMenuConfig {
  conversation_id: number;
  topTitle: string;
  expandConversations: boolean;
  fullScreen: boolean;
  height: string;
}

@Component({
    selector: 'fs-chat-menu',
    templateUrl: './fschatmenu.component.html',
    styleUrls: ['./fschatmenu.component.scss'],
})
export class FsChatMenuComponent implements OnInit {

  @Input('conversationId') conversation_id: number = null;
  @Input() expandConversations = false;

  isParticipants = false;

  constructor() { }

  ngOnInit() {

  }

  loadConversation(id: number): void {
    this.conversation_id = id;
  }

  participantsShow() {
    this.isParticipants = true;
  }

  participantsCallback(users) {
    console.log(users);
    this.isParticipants = false;
    if (users && users.length) {
      //@TODO
    }
  }
}
