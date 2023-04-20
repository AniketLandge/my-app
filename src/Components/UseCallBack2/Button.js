import React from 'react'

const Button = ({onClick, children}) => {
    console.log(`button component render for ${children}`)
    return ( 
        <>
        <button onClick={onClick}>{children}</button>
        </>
     );
}
 
export default React.memo(Button);