import './contact.css'
import logo from '../navbar/logo.png';
import heart from './Heart.svg';

function Contact () {
    return (
        <div>
           <div >
                <h1 className='title_Contact'>Contact list</h1>
                <div className='green_line_contacts'></div>
            </div>
            <div className="container_favorites">
            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <img src={heart} alt="heart" />

                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <img src={heart} alt="heart" />
                    
                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <img src={heart} alt="heart" />
                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <img src={heart} alt="heart" />
                </div>   
            </div>

            
            </div>
        </div>
    )
}

export default Contact
