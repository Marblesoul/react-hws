function CardView({ cards }) {
  return (
    <>
        {cards.map((card, index) => (
            <div className="store-card" key={index} style={{ backgroundImage: `url(${card.img})` }}>
                <h3 className="store-card__title">{card.name}</h3>
                <span className="store-card__color">{card.color}</span>
                <div className="store-card__body">
                    <p className="store-card__price">${card.price}</p>
                    <button className="store-card__btn">Add to cart</button>
                </div>
            </div>
        ))}
    </>
  )
}

export default CardView