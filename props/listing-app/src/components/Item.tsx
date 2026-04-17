import type { ListingItem } from '../types';
import { formatPrice, getQuantityLevel, truncateTitle } from '../utils';

interface ItemProps {
  item: ListingItem;
}

const Item = ({ item }: ItemProps) => (
  <div className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN} alt={item.title} />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{truncateTitle(item.title)}</p>
      <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
      <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
        {item.quantity} left
      </p>
    </div>
  </div>
);

export default Item;
