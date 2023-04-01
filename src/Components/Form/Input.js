import React, {useState, useMemo} from 'react'

const Input = () => {
    const [userRegistration, setUserRegistration] = useState({
        "username":""
    });
    const [records, setRecords] = useState([]);
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({...userRegistration, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const record = {...userRegistration, id:new Date().getTime().toString()}
        setRecords([...records, record])
        setUserRegistration({username:""});
        console.log(records)
    }
    return ( 
        <>
        
            <div style={{margin:"20px"}}>
              <form action='' onSubmit={handleSubmit}>
              <input type='text' value={userRegistration.username} name='username' id='username' onChange={handleOnChange}></input>
                <button type='submit'>Submit</button>
              </form>

              <div style={{margin:"20px"}}>
                {
                    records.map( rec => {
                        return (
                            <div key={rec.id}>{rec.username}</div>
                        )
                    })
                }
            </div>
            </div>
        </>
     );
}
 
export default Input;