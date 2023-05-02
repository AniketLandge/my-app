import React, {createContext} from 'react'
import ComponentA from './ComponentA'

export const UserContext = createContext(); //first step
export const FriendContext = createContext();
export const StudentContext = createContext();

/*
*
First step = create context;
Second step = wrap component with context and provide value
Third step = export the context
*/
function UseContextHook() {
  return (
    <>
    <UserContext.Provider value={'Rohan Das'}> 
    <FriendContext.Provider value={"Vishal Malik"}>
      <StudentContext.Provider value={'ShriVardhan'}>
    <div>UseContextHook</div>
    <ComponentA/>
    </StudentContext.Provider>
    </FriendContext.Provider>
    </UserContext.Provider>
    
    </>
  )
}

export default UseContextHook