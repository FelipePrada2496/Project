import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import Favorites from "../favorites/favorites";


function Overview () {

    return(
        <div>
            <Favorites />
            <Contact ver="contact"/>
        </div>
    )
}

export default Overview