import React, { createContext } from 'react'
import User from './reducers/User'

export const StoreContext = createContext(null)

const Store = ({ children }) => {
    const [value, dispatch] = User();

    const globalState = {
        User: value,
        UserDispatch: dispatch
    }

    return ( 
        <StoreContext.Provider value={globalState}>
            {children}
        </StoreContext.Provider>)
}

export default Store
