import { Component, OnInit, Input } from '@angular/core';
import { BitrateOption, VgAPI } from '../../../videogular2/core';
import { ActivatedRoute } from '@angular/router';

import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input() channels: Channel[];
  videoBitrates: BitrateOption[];
  videoApi: VgAPI;
  channel: Channel;
  url: string;
  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    // this.url = `http://192.168.37.2:1935/${this.channel.app}/${
    //   this.channel.streamName
    // }_adaptive.m3u8`;
    this.activatedRoute.params.subscribe( (params) => {
      this.channel = this.channels.find((channel) => {
        return channel.id == params['id'];
      });
      this.url = `http://192.168.37.2:1935/${this.channel.app}/${
        this.channel.streamName
      }_adaptive.m3u8`;
    });

  }

  setBitrates(recivedBitrates: BitrateOption[]) {
    if (recivedBitrates.length >= 3) {
    recivedBitrates[1].label = 'SD';
    recivedBitrates[2].label = 'HD';
    } else {
      recivedBitrates[1].label = 'HD';
    }
    this.videoBitrates = recivedBitrates;
  }

  onPlayerInit(api: VgAPI) {
    this.videoApi = api;
  }
}
