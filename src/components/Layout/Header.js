import React,{Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsbackImg from '../../assets/meals.jpg';
import style from './Header.module.css';

export default function Header(props){
   
    return (
        <>
            <header className = {style.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className = {style['main-image']}>
                <img src = {mealsbackImg}></img>
            </div>
        </>
    )
}
