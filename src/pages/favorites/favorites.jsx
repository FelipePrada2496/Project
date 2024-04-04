import './favorites.css'
import Card from '../../components/card/card'
import {useSelector } from 'react-redux'

const Favorites = () => {

    const {contacts} = useSelector((state) => state.contacts);
    const favorite = contacts.filter(contact => contact.isFavorite && !contact.isDeleted);

    return(
        <div className='margin-favorites'>
            <div>
                <h1 className='title_favorites'>Favorites</h1>
                <div className='green-line-favorites'></div>

                <div className='prueba'>
                <Card contacts ={favorite}/>
                </div>
            </div>
           
            
            
        </div>
    )
}

export default Favorites;