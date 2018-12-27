import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelRowComponent } from './channel-row/channel-row.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';

// Videogular 2 Modules
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';



@NgModule({
  declarations: [
    AppComponent,
    ChannelCardComponent,
    ToolbarComponent,
    ChannelsComponent,
    ChannelRowComponent,
    FooterComponent,
    PlayerComponent
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
    OwlModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
