import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

export interface Config {
  backButton: boolean;
  launchButton: boolean;
  topTitle: string;
}

@Component({
    selector: 'fs-chat-conversation',
    templateUrl: './fschatconversation.component.html',
    styleUrls: ['./fschatconversation.component.scss'],
})
export class FsChatConversationComponent implements OnInit, OnChanges {

  @Input('fsConfig') fsConfig: Config = null;
  @Input('conversationId') conversation_id: number = null;

  @Output() changeConversation = new EventEmitter<number>();

  ngOnInit() {
    this.fsConfig = Object.assign({
      backButton: false,
      launchButton: false,
      topTitle: ''
    }, this.fsConfig);
  }

  ngOnChanges(changes) {
    console.log(`Load conversation ${ changes.conversation_id.currentValue }`);
  }

  selectConversation(id: number): void {
    this.conversation_id = id;
    this.changeConversation.emit(id);
  }
}
