import { Component, OnInit } from '@angular/core';

import { Channel } from '../core/channel.model';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  channels: Channel[];

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.getChannels();
  }

  getChannels() {
    this.channelService.getChannels().subscribe(data => {
      this.channels = data;
      console.log(data);
    });
  }
}
