import React, {useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count';
import Button from './Button';
function UseCallbackHooks() {
    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(40000);
    const increamentAge = useCallback(() => {
      setAge(age+1);
  }, [age]);
    const increamentSalary = useCallback(() => {
      setSalary(salary+5000);
  }, [salary]);
  return (
    <>
    <Title/>
    <Count text="Age" value={age}/>
    <Button onClick={increamentAge}>Increament Age</Button>
    <Count text="Salary" value={salary}/>
    <Button onClick={increamentSalary}>Increament Salary</Button>
    </>
  )
}

export default UseCallbackHooks