export interface ListingImage {
  url_570xN: string;
}

export interface ListingItem {
  listing_id: number;
  url: string;
  MainImage: ListingImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}
