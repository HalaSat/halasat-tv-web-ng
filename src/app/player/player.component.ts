import { Component, OnInit, Input } from '@angular/core';
import { BitrateOption, VgAPI } from '../../../videogular2/core';

import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  videoBitrates: BitrateOption[];
  videoApi: VgAPI;
  @Input() channel: Channel;
  url: string;
  constructor() {}

  ngOnInit() {
    this.url = `http://192.168.37.2:1935/${this.channel.app}/${
      this.channel.streamName
    }_adaptive.m3u8`;
  }

  setBitrates(recivedBitrates: BitrateOption[]) {
    recivedBitrates[1].label = 'SD';
    recivedBitrates[2].label = 'HD';
    this.videoBitrates = recivedBitrates;
  }

  onPlayerInit(api: VgAPI) {
    this.videoApi = api;
  }
}
