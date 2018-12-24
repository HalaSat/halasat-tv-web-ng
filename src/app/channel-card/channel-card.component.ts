import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
})
export class ChannelCardComponent implements OnInit {
  @Input() data: Channel;
  constructor() {}

  ngOnInit() {}
}
