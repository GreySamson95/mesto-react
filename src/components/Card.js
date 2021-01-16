import React from 'react'

function Card({onCardClick, card, isOpen }) {
    function handleClick() {
        onCardClick(card)
    }
    return (
        <article className="element">
            <button className="element__delete" type="button" aria-label="Удалить" onClick={isOpen}></button>
            <img className="element__photo" src={card.link} alt="Фото" onClick={handleClick} ></img>
            <div className="element__description">
                <h2 className="element__text">{card.name}</h2>
                <button className="element__like" type="button" aria-label="Нравится"></button>
                <p className="element__amount">{card.likes.length}</p>
            </div>
        </article>
    )
}

export default Card
