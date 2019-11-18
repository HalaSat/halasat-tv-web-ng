import { Component, OnInit, Input } from "@angular/core";
import { BitrateOption, VgAPI } from "../../../videogular2/core";
import { ActivatedRoute } from "@angular/router";
import { Channel } from "../core/channel.model";
import Plyr from "plyr";
import Hls from "hls.js";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.scss"]
})
export class PlayerComponent implements OnInit {
  @Input() channels: Channel[];
  videoBitrates: BitrateOption[];
  videoApi: VgAPI;
  channel: Channel;
  url: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.url = `http://192.168.37.2:1935/${this.channel.app}/${
    //   this.channel.streamName
    // }_adaptive.m3u8`;

    let player;
    this.activatedRoute.params.subscribe(params => {
      this.channel = this.channels.find(channel => {
        return channel.id == params["id"];
      });

      if (!player) {
        // player = new (window as any).Clappr.Player({
        //   source: this.channel.url,
        //   parentId: "#player",
        //   width: "100%",
        //   height: "100%",
        //   autoPlay: true
        // });
      }

      var video = document.querySelector("#player");

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(this.channel.url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          (video as any).play();
        });
      }
      Plyr.setup(video);
    });
  }
}
