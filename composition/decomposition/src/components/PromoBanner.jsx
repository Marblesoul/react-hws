/** PromoBanner отвечает за рекламный или промо-блок страницы. */
const PromoBanner = ({ title, text, image, compact = false }) => (
  <aside className={compact ? 'promo promo-compact' : 'promo'}>
    {image && (
      <span className="promo-image" aria-hidden="true">
        {image}
      </span>
    )}
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </aside>
);

export default PromoBanner;
