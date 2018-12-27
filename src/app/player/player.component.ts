import { Component, OnInit } from '@angular/core';
import { BitrateOption, VgAPI } from '../../../videogular2/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  videoBitrates: BitrateOption[];
  videoApi: VgAPI;
  constructor() { }

  ngOnInit() {
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
