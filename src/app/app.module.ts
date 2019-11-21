import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatButtonModule,
  MatRippleModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { OwlModule } from "ngx-owl-carousel";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChannelCardComponent } from "./channel-card/channel-card.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ChannelsComponent } from "./channels/channels.component";
import { ChannelRowComponent } from "./channel-row/channel-row.component";
import { FooterComponent } from "./footer/footer.component";
import { PlayerComponent } from "./player/player.component";

// Videogular 2 Modules
import { ChannelPlayerComponent } from "./channel-player/channel-player.component";
import { ChannelColumnComponent } from "./channel-column/channel-column.component";

@NgModule({
  declarations: [
    AppComponent,
    ChannelCardComponent,
    ToolbarComponent,
    ChannelsComponent,
    ChannelRowComponent,
    FooterComponent,
    PlayerComponent,
    ChannelPlayerComponent,
    ChannelColumnComponent
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
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
