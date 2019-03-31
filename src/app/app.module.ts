import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { GrouperComponent } from './components/grouper/grouper.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    GrouperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
