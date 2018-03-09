import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatMenuModule, MatInputModule, MatListModule,
         MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { FsChatComponent } from './components/chat/fschat.component';
import { FsChatMenuComponent } from './components/menu/fschatmenu.component';
import { FsChatConversationComponent } from './components/conversation/fschatconversation.component';
import { FsChatConversationsComponent } from './components/conversations/fschatconversations.component';
import { FsParticipantsComponent } from './components/participants/fsparticipants.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatListModule,
        MatAutocompleteModule,
        MatButtonModule,
        FormsModule
    ],
    declarations: [
      FsChatConversationComponent,
      FsChatConversationsComponent,
      FsParticipantsComponent,
      FsChatComponent,
      FsChatMenuComponent
    ],
    providers: [],
    exports: [
      FsChatComponent,
      FsChatMenuComponent
    ]
})
export class FsChatModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsChatModule,
      providers: []
    };
  }
}

