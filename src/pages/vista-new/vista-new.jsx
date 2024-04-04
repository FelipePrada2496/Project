import New from "../../components/new/new"
import Contact from "../contact/contact"
import Favorites from "../favorites/favorites"


const VistaNew = () => {
    
    return (
        <div>
            <New />
            <Favorites />
            <Contact ver="overview"/>
        </div>

    )
}

export default VistaNew