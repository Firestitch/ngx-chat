import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsChatModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsExamplesComponent } from '../tools/components/examples/examples.component';
import { FirstExampleComponent } from './app/components/first-example/first-example.component';
import { SecondExampleComponent } from './app/components/second-example/second-example.component';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsChatModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent,
    SecondExampleComponent,
    FsExamplesComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
