import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../core/channel.model';

@Component({
  selector: 'app-channel-column',
  templateUrl: './channel-column.component.html',
  styleUrls: ['./channel-column.component.scss'],
})
export class ChannelColumnComponent implements OnInit {
  @Input() channels: Channel[];

  constructor() {}

  ngOnInit() {}
}
