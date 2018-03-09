import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface FsChatConversationsConfig {
  topTitle: string;
  expandConversations: boolean;
}

@Component({
    selector: 'fs-chat-conversations',
    templateUrl: './fschatconversations.component.html',
    styleUrls: ['./fschatconversations.component.scss'],
})
export class FsChatConversationsComponent implements OnInit {

  @Input() fsConfig: FsChatConversationsConfig = null;
  @Input('conversationId') conversation_id: number = null;

  @Output() changeConversation = new EventEmitter<number>();

  mockConversations = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: true
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 3,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 4,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 5,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 6,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 7,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    },
    {
      id: 8,
      first_name: 'John',
      last_name: 'Doe',
      lastMessage: 'I\'m good, thanks, how have you been?',
      dateAgo: '15m',
      avatar: '/assets/user-avatar.jpg',
      unread: false
    }
  ];

  ngOnInit() {
    this.fsConfig = Object.assign({
      topTitle: '',
      expandConversations: false
    }, this.fsConfig);

    this.selectConversation(this.conversation_id);
  }

  selectConversation(id: number): void {
    this.conversation_id = id;
    this.changeConversation.emit(id);
  }
}
