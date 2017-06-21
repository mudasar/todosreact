import React from 'react'

export const NotFound = (props) => {
    return(
        <div>
            <p>The page you were looking for couldn't be found.</p>
            {props.children}
        </div>
    )
}

export default NotFound