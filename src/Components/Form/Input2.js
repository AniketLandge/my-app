import React, { useState } from 'react'

const Input2 = () => {
    const [userReg, setUserReg]= useState({
        'username':""
    });
    const [records, setRecords] = useState([])
    
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserReg({...userReg, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let record = {...userReg, id:new Date().getTime().toString()}
        setRecords([...records, record]);
        setUserReg({'username':""})
        console.log(records)
    }
    return (
        <>
            <h1>Add name</h1>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" value={userReg.username} onChange={handleChange}/>
                    <button type="submit">Submit</button>
                </form>
               {
                    records.length > 0 ? records.map((rec) => {
                        return <div key={rec.id}>{rec.username}</div>
                    }) : <div>Ooops no records</div>
               }
            </div>
        </>
    )
}

export default Input2