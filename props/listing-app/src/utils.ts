export const truncateTitle = (title: string, max = 50): string =>
  title.length > max ? `${title.slice(0, max)}…` : title;

export const formatPrice = (price: string, currencyCode: string): string => {
  switch (currencyCode) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return `${price} ${currencyCode}`;
  }
};

export type QuantityLevel = 'level-low' | 'level-medium' | 'level-high';

export const getQuantityLevel = (quantity: number): QuantityLevel => {
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
};
