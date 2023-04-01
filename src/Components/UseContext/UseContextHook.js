import React, {createContext} from 'react'
import ComponentA from './ComponentA'

export const UserContext = createContext(); //first step
export const FriendContext = createContext();

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
    <div>UseContextHook</div>
    <ComponentA/>
    </FriendContext.Provider>
    </UserContext.Provider>
    
    </>
  )
}

export default UseContextHook