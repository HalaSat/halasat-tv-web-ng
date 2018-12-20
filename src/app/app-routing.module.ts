import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChannelCardComponent } from "./channel-card/channel-card.component";

const routes: Routes = [
  { path: "channel-card", component: ChannelCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
