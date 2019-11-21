import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  @Input() channels: Channel[];
  channel: Channel;
  url: string;
  player;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.player = (window as any).videojs('vid1');
    this.activatedRoute.params.subscribe(params => {
      this.channel = this.channels.find(channel => {
        return channel.id === params['id'];
      });
      this.player.src({
        src: this.channel.url,
        type: 'application/x-mpegURL',
      });
      this.player.play();
    });
  }

  ngOnDestroy() {
    (window as any).videojs('vid1').dispose();
  }

}
