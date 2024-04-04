import './contact.css'
import Card from '../../components/card/card'
import { useSelector } from 'react-redux'

function Contact () { 

    const {contacts} = useSelector((state) => state.contacts)
    const contactsList = contacts.filter(contact => contact.isDeleted === false)

    return (
        <div className='margin-contacts'>
           <div>
                <h1 className='title-contacts'>Contact list</h1>
                <div className='green-line-contacts'></div>

                <div className='contact-list'>
                    <Card contacts ={contactsList}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
