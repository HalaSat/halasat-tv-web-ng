import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-channel-row',
  templateUrl: './channel-row.component.html',
  styleUrls: ['./channel-row.component.scss'],
})
export class ChannelRowComponent implements OnInit {
  @Input() allChannels: Channel[];
  @Input() category: string;
  channels: Channel[];

  constructor() {}

  ngOnInit() {
    this.channels = Channel.filter(this.allChannels, this.category);
    console.log(this.channels);
  }
}
