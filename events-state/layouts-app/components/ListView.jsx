function ListView({ cards }) {
  return (
    <>
        {cards.map((card, index) => (
            <div className="store-card store-card__list" key={index}>
                <img src={card.img} alt="" srcset="" />
                <h3 className="store-card__title">{card.name}</h3>
                <span className="store-card__color">{card.color}</span>
                <div className="store-card__body">
                    <p className="store-card__price">${card.price}</p>
                    <button className="store-card__btn">Add to cart</button>
                </div>
            </div>
        ))}
    </>
  );
}

export default ListView;