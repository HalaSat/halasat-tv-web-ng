import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelCardComponent } from './channel-card/channel-card.component';
import { ChannelsComponent } from './channels/channels.component';

const routes: Routes = [
  { path: '', redirectTo: 'channels', pathMatch: 'full' },
  { path: 'channel-card', component: ChannelCardComponent },
  { path: 'channels', component: ChannelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
