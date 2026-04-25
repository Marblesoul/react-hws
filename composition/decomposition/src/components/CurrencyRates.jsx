/** CurrencyRates отвечает за строку курсов валют и сырья. */
const CurrencyRates = ({ rates }) => (
  <ul className="rates">
    {rates.map(({ currency, value, change }) => (
      <li className="rate" key={currency}>
        <b>{currency}</b>
        <span>{value}</span>
        <small>{change}</small>
      </li>
    ))}
  </ul>
);

export default CurrencyRates;
