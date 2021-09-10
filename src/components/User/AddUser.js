import React from "react";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import style from './AddUser.module.css'

class AddUser extends React.Component{

    state={
        user : '',
        age :''
    }
    addUserHandler=(evt)=>{
        evt.preventDefault();
       // console.log(this.state.user,this.state.age);

        if(this.state.user.trim().length ===0 || this.state.age.trim().length ===0){
            console.log('err')
            return;
        }

        if(+this.state.age<1){
            console.log('err age')
            return;
        }
        
        this.props.onAddUser(this.state.user,this.state.age);
        this.initiateInputHandler();
    }


    initiateInputHandler= ()=>{
        this.setState({
            user: '',
            age : ''
        });
    }
    usernameChangeHandler=(evt)=>{
        this.setState({
            user : evt.target.value,
            age : this.state.age
        })
    }

    ageChangeHandler=(evt)=>{
        this.setState({
            user : this.state.user,
            age : evt.target.value
        })
    }


    render(){
        return (
            <Card className={style.input}>
            <form onSubmit={this.addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={this.state.user} onChange={this.usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={this.state.age} onChange={this.ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
        )
    }
}


export default AddUser;