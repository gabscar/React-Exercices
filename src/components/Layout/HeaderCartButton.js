import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import style from './HeaderCartButton.module.css';
import CartContext from '../../store/CartContext'


export default function HeaderCartButton(props){
    const cartContex = useContext(CartContext);

    const qtdCartItem = cartContex.items.reduce((acc,item)=>{
        return acc +item.amount;
    },0); 
    return(
        <button className = {style.button} onClick = {props.onClick}>
            <span className = {style.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span className={style.badge}>{qtdCartItem}</span>
        </button>
    )
}