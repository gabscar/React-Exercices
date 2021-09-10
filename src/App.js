
import { useState } from 'react';
import './App.css';

import AddUser from './components/User/AddUser'

import UserList from './components/User/UserList'
function App() {
  const [userList, setUserList]= useState([]);

  const addUserHandler = (name, age)=>{
    console.log(name,age)
    setUserList((prevList)=>{
      return [ 
        ...prevList,
        {name: name,age: age, id: Math.random().toString()}
      ]
    })
  }
  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UserList users = {userList}/>
    </div>
  );
}

export default App;
