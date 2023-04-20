import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


const UseCallBackHook = () => {
    const [age, setAge] = useState(18)
    const [salary, setSalary] = useState(4000)
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000);
    },[salary])
    return (
        <>
            <h1>UseCallback</h1>
            <Title/>
            <Count text="Age" value={age}/>
            <Button onClick={incrementAge}>Increament Age</Button>
            <Count text="Salary" value={salary}/>
            <Button onClick={incrementSalary}>Increament salary</Button>
        </>
    )
}


export default UseCallBackHook