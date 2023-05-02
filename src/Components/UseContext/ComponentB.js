import React, {useContext} from 'react'
import {UserContext, FriendContext, StudentContext} from './UseContextHook' //1. import context
function ComponentB() {
    const user = useContext(UserContext); //2. put it in useContext hook
    const friend = useContext(FriendContext);
    const student = useContext(StudentContext)
  return (
    <>
     <div>ComponentB</div>
    <div>User - {user}</div>
    <div>Friend - {friend}</div>
    <div>student - {student}</div>

    </>
   
  )
}

export default ComponentB