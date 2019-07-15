import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Channel } from '../core/channel.model';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-player',
  templateUrl: './channel-player.component.html',
  styleUrls: ['./channel-player.component.scss']
})
export class ChannelPlayerComponent implements OnInit {
  channels: Channel[];
  channel: Channel;
  filteredChannels: Channel[];

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService
  ) {}

  ngOnInit() {
    this.channelService.getChannels().subscribe(channels => {
      this.channels = channels;
      this.route.params.subscribe(params => {
        this.setChannel(params['id']);
        this.filteredChannels = Channel.filter(channels, this.channel.category);
      });
    });
  }
  setChannel(id) {
    this.channel = this.channels.find(channel => channel.id == id);
  }
}
