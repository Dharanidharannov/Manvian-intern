import React, { createContext,Children } from "react";


export const Appstorage = createContext();


const Appstore =({children})=>{

    let a = 'resume'

    let store = {a}
      return(
        <Appstorage.Provider value={store}>
            {children}
        </Appstorage.Provider>
      )
}

export default Appstore