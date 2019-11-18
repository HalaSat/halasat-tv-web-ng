import { Component, OnInit, Input } from "@angular/core";

import { Channel } from "../core/channel.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-channel-column",
  templateUrl: "./channel-column.component.html",
  styleUrls: ["./channel-column.component.scss"]
})
export class ChannelColumnComponent implements OnInit {
  @Input() channels: Channel[];

  constructor(private router: Router) {}

  cardClicked(channel: Channel) {
    this.router.navigateByUrl("/play/" + channel.id);
  }

  ngOnInit() {}
}
