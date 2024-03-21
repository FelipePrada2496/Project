import './favorites.css'
import logo from '../navbar/logo.png';

function Favorites () {

    return(
        <div>
            <div >
                <h1 className='title_favorites'>Favorites</h1>
                <div className='green_line'></div>
            </div>
            <div className="container_favorites">
            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <div className="icono-remove">X Remove</div>
                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>
                    <div className="icono-remove">X Remove</div>
                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>

                    <div className="icono-remove">X Remove</div>
                </div>   
            </div>

            <div className='mi-div'>
                <div className='circle'>
                    <img src={logo} alt="Logo" className='image' />
                    <p className='name'>Full name</p>
                    <p className='email'>email@gmail.com</p>
                    <div className="linea-horizontal"></div>

                    <div className="icono-remove">X Remove</div>
                </div>   
            </div>
            
            </div>
        </div>
    )
}

export default Favorites