import { Component, OnInit } from "@angular/core";

import { Channel } from "../core/channel.model";
import { ChannelService } from "../channel.service";

@Component({
  selector: "app-channels",
  templateUrl: "./channels.component.html",
  styleUrls: ["./channels.component.scss"]
})
export class ChannelsComponent implements OnInit {
  channels: Channel[];
  categories: string[];

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this.channelService.getChannels().subscribe(data => {
      const channels = data.filter(channel => channel.enabled);
      this.categories = channels.map(channel => channel.category);
      this.categories = Array.from(new Set(this.categories));
      this.channels = channels;
    });
  }
}
