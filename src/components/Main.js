import Card from './Card.js'
import React, { useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main(props) {
    const currentUser = useContext(CurrentUserContext)

    return (
        <>
            <section className="profile">
                <div className="profile__edit-profile">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"></img>
                    <button className="profile__edit" type="button" aria-label="Редактировать" 
                        onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__self">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {props.cards.map((item) => {
                    return (
                        <Card key={item._id} card={item} onCardClick={props.onCardClick} onDeleteImage={props.onDeleteImage}
                        onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
                    )
                })}
            </section>
        </>

    )
}

export default Main