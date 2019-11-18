import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { earthlinkChannels } from "./earthlink_channels";
import { Channel, ChannelAdapter } from "./core/channel.model";
import { CHANNELS_API } from "./constants";

@Injectable({
  providedIn: "root"
})
export class ChannelService {
  constructor(private http: HttpClient, private adapter: ChannelAdapter) {}

  /**
   * Fetch the channels data from an http server.
   * @author Mohammed Salman
   */
  getChannels(): Observable<Channel[]> {
    const channels = this.http
      .get<Channel[]>(CHANNELS_API)
      .pipe(
        map((data: any) =>
          data.channels.map((item: any) => this.adapter.adapt(item))
        )
      );

    return channels;

    return of(earthlinkChannels.channels).pipe(
      // model the data items to be of type Channel
      map((data: any[]) => data.map((item: any) => this.adapter.adapt(item)))
    );
  }
}
