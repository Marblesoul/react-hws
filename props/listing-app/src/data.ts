import raw from './etsy.json';
import type { ListingItem } from './types';

const items = (raw as unknown as Partial<ListingItem>[]).filter(
  (item): item is ListingItem => Boolean(item.MainImage?.url_570xN),
);

export default items;
