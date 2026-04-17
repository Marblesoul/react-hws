import type { ListingItem } from '../types';
import Item from './Item';

interface ListingProps {
  items?: ListingItem[];
}

const Listing = ({ items = [] }: ListingProps) => (
  <div className="item-list">
    {items.map((item) => (
      <Item key={item.listing_id} item={item} />
    ))}
  </div>
);

export default Listing;
