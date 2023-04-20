import React, {useState, useMemo} from 'react'

const MyCounter = () => {
    const [countOne,  setCountOne] = useState(0)
    const [countTwo,  setCountTwo] = useState(0)
    const incrementCount1 = () => setCountOne(countOne+ 1)
    const incrementCount2 = () => setCountTwo(countTwo+ 10)
    const isEven = useMemo(() => {
        let i = 0;
        while(i<2000000000) i++;
        let res = countOne%2 === 0 ? 'Even' : 'Odd'
        return res
    }, [countOne])
    return ( 
        <>
            <h1>Counter</h1>
            <div>counter 1 {countOne}</div>
            <span>{isEven}</span>
           <div> <button onClick={incrementCount1}>Counter 1</button></div>
           <div>counter 2 {countTwo}</div>
           <div><button  onClick={incrementCount2}>Counter 2</button></div>
            
        </>
     );
}
 
export default MyCounter;