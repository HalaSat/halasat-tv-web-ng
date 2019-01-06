import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChannelCardComponent } from "./channel-card/channel-card.component";
import { ChannelsComponent } from "./channels/channels.component";
import { ChannelPlayerComponent } from "./channel-player/channel-player.component";

const routes: Routes = [
  { path: "channel-card", component: ChannelCardComponent },
  { path: "", component: ChannelsComponent },
  { path: "play/:id", component: ChannelPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
