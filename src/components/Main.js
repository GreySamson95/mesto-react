import api from '../utils/api.js'
import Card from './Card.js'
import React, { useState, useEffect } from 'react'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteImage }) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, getCards] = useState([])

    useEffect(() => {
        api.getInitialData()
            .then(([userData,dataFromSecondPromise]) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
                getCards(dataFromSecondPromise)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <section className="profile">
                <div className="profile__edit-profile">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар"></img>
                    <button className="profile__edit" type="button" aria-label="Редактировать" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                    <p className="profile__self">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((item) => {
                    return (
                        <Card key={item._id} card={item} onCardClick={onCardClick} isOpen={onDeleteImage} />
                    )
                })}
            </section>
        </>

    )
}

export default Main