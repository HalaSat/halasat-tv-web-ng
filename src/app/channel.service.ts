import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { mockChannels } from './mock-channels';
import { Channel, ChannelAdapter } from './core/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private channelsUrl = 'http://tv.halasat.net/api';

  constructor(private http: HttpClient, private adapter: ChannelAdapter) {}

  /**
   * Fetch the channels data from an http server.
   * @author Mohammed Salman
   */
  getChannels(): Observable<Channel[]> {
    // return this.http
    //   .get<Channel[]>(this.channelsUrl)
    //   .pipe(
    //     map((data: any[]) => data.map((item: any) => this.adapter.adapt(item)))
    //   );

    return of(mockChannels).pipe(
      // model the data items to be of type Channel
      map((data: any[]) => data.map((item: any) => this.adapter.adapt(item)))
    );
  }
}
