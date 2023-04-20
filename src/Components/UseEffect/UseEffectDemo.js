import React, {useEffect} from 'react'

const UseEffectDemo = ({name}) => {
    useEffect(() => {
        document.title = `hello ${name}`
    }, [name])

    return ( 
        <>
        <h1>Useeffect</h1>
        </>
     );
}
 
export default UseEffectDemo;