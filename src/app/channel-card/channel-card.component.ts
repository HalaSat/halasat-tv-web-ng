import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Channel } from "../core/channel.model";

@Component({
  selector: "app-channel-card",
  templateUrl: "./channel-card.component.html",
  styleUrls: ["./channel-card.component.scss"]
})
export class ChannelCardComponent implements OnInit {
  @Input() data: Channel;
  currentChannelId;

  constructor(private router: Router) {}

  cardClicked() {
    this.router.navigateByUrl("/play/" + this.data.id);
  }

  ngOnInit() {}
}
