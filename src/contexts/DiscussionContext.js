import React, { createContext } from "react"

const discussions = [];

export const allDiscussions = createContext()

const DiscussionContext = ({children}) => {

    return(
        <allDiscussions.Provider value={discussions}>
            {children}
        </allDiscussions.Provider>
    )
}

export default DiscussionContext;