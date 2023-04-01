import React, {useState, useMemo} from 'react'

function CounterOne() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const increamentOne = ()=> setCountOne(countOne+1);
    const increamentTwo = ()=> setCountTwo(countTwo+1);
    const isEven = useMemo(() => {
        let i = 0;
        while(i<2000000000) i++;
        const res = countOne%2===0 ? "Even" : "Odd";
        return res;
    },[countOne]) 
  return (
    <>
    <div>CounterOne {countOne}
    <div>
    <span>{isEven}</span>
    </div>
    
    </div>
    <div>
        <button onClick={increamentOne}>Counter One</button>
    </div>
    <div>Counter Two {countTwo}</div>
    <div>
        <button onClick={increamentTwo}>Counter Two</button>
    </div>
    </>
    
  )
}

export default CounterOne