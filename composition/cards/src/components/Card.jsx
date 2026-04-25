const Card = ({ imageSrc, imageAlt = '', children }) => (
  <article className="card">
    {imageSrc && <img className="card-img-top" src={imageSrc} alt={imageAlt} />}
    <div className="card-body">{children}</div>
  </article>
);

export default Card;
