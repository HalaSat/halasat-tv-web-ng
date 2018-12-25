import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelRowComponent } from './channel-row/channel-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelCardComponent,
    ToolbarComponent,
    ChannelsComponent,
    ChannelRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatToolbarModule,
    // SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
