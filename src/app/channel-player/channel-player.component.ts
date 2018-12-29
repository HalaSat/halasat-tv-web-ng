import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Channel } from '../core/channel.model';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel-player',
  templateUrl: './channel-player.component.html',
  styleUrls: ['./channel-player.component.scss'],
})
export class ChannelPlayerComponent implements OnInit {
  channels: Channel[];
  channel: Channel;
  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
  ) {}

  ngOnInit() {
    this.channelService.getChannels().subscribe(channels => {
      this.channels = channels;
      this.setChannel();
    });
  }
  setChannel() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.channels.forEach(channel => {
      if (channel.id === id) this.channel = channel;
    });
  }
}
