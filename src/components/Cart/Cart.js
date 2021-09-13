import { useContext } from 'react';
import Modal from '../Utils/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

function Cart (props){
    const cartContex = useContext(CartContext);

    const totalAmount = `R$${cartContex.totalAmount.toFixed(2)}`;
    const hasItems = cartContex.items.length > 0;

    function cartItemRemoveHandler (id) {
      cartContex.removeItem(id);
    };

    function cartItemAddHandler (item) {
      cartContex.addItem({...item,amount:1});
    };

    const cartItems = (
      <ul className={style['cart-items']}>
        {cartContex.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button 
                  className={style['button--alt']}
                  onClick = {props.onClose}
                >
                  Close
                </button>
                {hasItems && <button className={style.button}>Order</button>}
            </div>       
        </Modal>
    )
}


export default Cart;