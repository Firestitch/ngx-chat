import { Component, Input, OnInit } from '@angular/core';

export interface FsChatConfig {
  conversation_id: number;
  topTitle: string;
  expandConversations: boolean;
  fullScreen: boolean;
  height: string;
}

@Component({
    selector: 'fs-chat',
    templateUrl: './fschat.component.html',
    styleUrls: ['./fschat.component.scss'],
})
export class FsChatComponent implements OnInit {

  @Input('conversationId') conversation_id: number = null;
  @Input() expandConversations = false;

  constructor() { }

  ngOnInit() {

  }

  loadConversation(id: number): void {
    this.conversation_id = id;
  }
}
