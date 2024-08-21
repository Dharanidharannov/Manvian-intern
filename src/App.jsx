import React, { useContext } from "react";
import { Appstorage } from "./Context/Appstore";
import Resume from "./Components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
   

    return(
        <div>
             <Resume/>
        </div>
    )
}

export default App