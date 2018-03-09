import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './../../../app/modules/material.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FsChatComponent } from './fschat.component';
import { FsChatMenuComponent } from './menu/fschatmenu.component';
import { FsChatConversationComponent } from './conversation/fschatconversation.component';
import { FsChatConversationsComponent } from './conversations/fschatconversations.component';
import { FsParticipantsComponent } from './participants/fsparticipants.component';

@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        MatIconModule,
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

}
