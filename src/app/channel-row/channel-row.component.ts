import { Component, OnInit, Input } from '@angular/core'

import { Channel } from '../core/channel.model'

@Component({
  selector: 'app-channel-row',
  templateUrl: './channel-row.component.html',
  styleUrls: ['./channel-row.component.scss']
})
export class ChannelRowComponent implements OnInit {
  @Input() allChannels: Channel[]
  @Input() category: string
  channels: Channel[]

  constructor() {}

  public owlRspObject

  detectmob() {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true
    } else {
      return false
    }
  }

  ngOnInit() {
    this.channels = Channel.filter(this.allChannels, this.category)
    this.owlRspObject = {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      768: {
        items: 3
      },
      1080: {
        items: 5
      }
    }
  }
}
