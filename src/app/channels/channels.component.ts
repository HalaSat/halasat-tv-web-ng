import { Component, OnInit } from '@angular/core';

import { Channel } from '../core/channel.model';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
// export class ChannelsComponent implements OnInit {
//   channels: Channel[];

//   constructor(private channelService: ChannelService) {}

//   ngOnInit() {
//     this.getChannels();
//   }

//   getChannels() {
//     this.channelService.getChannels().subscribe(data => {
//       this.channels = data;
//       console.log(data);
//     });
//   }
// }
export class ChannelsComponent implements OnInit {
  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  ngOnInit() {}

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
