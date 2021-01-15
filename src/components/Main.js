import api from './utils/Api.js'
import Card from './Card.js'
import React, { useState, useEffect } from 'react'

function Main(props) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, getCards] = useState([])

    // function getInformation() {
    //     api.getAllNeededData()
    //         .then((result) => {
    //             const [userData, dataFromSecondPromise] = result
    //             setUserName(userData.name)
    //             setUserDescription(userData.about)
    //             setUserAvatar(userData.avatar)
    //             return dataFromSecondPromise
    //         })
    //         .then((dataFromSecondPromise) => {
    //             getCards(dataFromSecondPromise)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     getInformation({})
    // }, [])

    useEffect(() => {
        api.getAllNeededData()
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
                    <button className="profile__edit" type="button" aria-label="Редактировать" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__self">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((item, index) => {
                    return (
                        <Card key={index} card={item} onCardClick={props.onCardClick} isOpen={props.onDeleteImage} />
                    )
                })}
            </section>
        </>

    )
}

export default Main