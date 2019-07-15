import { Injectable } from '@angular/core'
import { Adapter } from './adapter'

/**
 * Channel Model
 * @author Mohammed Salman
 */
export class Channel {
  /* DO NOT REORDER THE ARGUMENTS */
  constructor(
    public id: string,
    public enabled: boolean,
    public name: string,
    public url: string,
    public category: string,
    public cat: string
  ) {}

  /**
   * Filter the channels based on their category.
   * @param channels - channels array to filter
   * @param category - category string to filter the channels with. Must be one of
   * these categories `['Entertainment', 'Movies', 'Kids', 'Series', 'Sports', 'Music']`,
   *  if empty the function returns all the channels
   * @author Mohammed Salman
   */
  static filter(channels: Channel[], category: string): Channel[] {
    return category
      ? channels.filter(item => item.category == category)
      : channels
  }
}

/**
 * Adapt the data to the channel model.
 * @author Mohammed Salman
 */
@Injectable({
  providedIn: 'root'
})
export class ChannelAdapter implements Adapter<Channel> {
  adapt(item: any): Channel {
    return new Channel(
      item.id,
      item.enabled,
      item.name,
      item.url,
      item.category,
      item.cat
    )
  }
}
