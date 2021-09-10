import React from "react";
import Card from "../Utils/Card";


import style from './UserList.module.css'

function UserList(props){
    return(
       <Card className = {style.users}>
           <ul>
               {props.users.map((item)=>(
                   <li key = {item.id}>
                       {item.name} ({item.age} yars old)
                   </li>
               ))}
           </ul>
       </Card>
    )
}


export default UserList;