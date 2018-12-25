import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

/**
 * Channel Model
 * @author Mohammed Salman
 */
export class Channel {
  /* DO NOT REORDER THE ARGUMENTS */
  constructor(
    public id: number,
    public type: number,
    public epg: number,
    public order: number,
    public enabled: number,
    public title: string,
    public imageUrl: string,
    public streamName: string,
    public app: string,
    public color: string,
    public category: string,
  ) {}

  static filter(channels: Channel[], category: string): Channel[] {
    return category
      ? channels.filter(item => item.category == category)
      : channels;
  }
}

/**
 * Adapt the data to the channel model.
 * @author Mohammed Salman
 */
@Injectable({
  providedIn: 'root',
})
export class ChannelAdapter implements Adapter<Channel> {
  adapt(item: any): Channel {
    return new Channel(
      parseInt(item.id),
      parseInt(item.type),
      parseInt(item.epg),
      parseInt(item.vorder),
      parseInt(item.enable),
      item.title,
      item.image,
      item.streamname,
      item.app,
      item.color,
      item.cat,
    );
  }
}
