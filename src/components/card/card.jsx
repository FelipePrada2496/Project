import React, { useState } from 'react';
import './card.css';
import { useDispatch } from 'react-redux';
import { removeContact, toggleFavorite } from '../../reducers/contactSlices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; 
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { updateContactApi } from '../../services/api2';


const Card = (props) => { 
    const contacts = props.contacts;
    const dispatch = useDispatch()

       const handleFavorite = async (user) => {
        console.log(user)
        dispatch(toggleFavorite(user.id))
        await updateContactApi({...user, isFavorite: !user.isFavorite})
       } 

       const removeUser = async (user) => {
        console.log(user)
        dispatch(removeContact(user.id))
        await updateContactApi({...user, isDeleted: true})
       }

       return (
        <div className='row'>
          {contacts && contacts.map((user, index) => (
            <div className='cards' key={index}>
              <img className={`avatar ${user.isFavorite ? 'favorite' : ''}`} src={user.avatar} alt='avatar' />
                <p className='full-name'>{user.first_name} {user.last_name}</p>
                <p className='email'>{user.email}</p>
                <div className='linea-horizontal'></div>
                <hr />
                <div className='button-container'>
                <button
                    className={`button ${user.isFavorite ? 'button-favorite' : 'button-contact'} button-contact`}
                    onClick={() => handleFavorite(user)}
                >
                    {user.isFavorite ? 'X REMOVE' : <span className="material-symbols-rounded"><FontAwesomeIcon icon={faHeart} /></span>}
                </button>
                
                {!user.isFavorite && 
                    <button
                        className={`button button-favorite` }
                        onClick={() => removeUser(user)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                }
                </div>
            </div>
          ))}
        </div>
      );
    }

export default Card;
