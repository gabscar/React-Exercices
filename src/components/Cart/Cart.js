import { useContext, useState } from 'react';
import Modal from '../Utils/Modal';
import style from './Cart.module.css';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart (props){
    const cartContex = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const totalAmount = `R$${cartContex.totalAmount.toFixed(2)}`;
    const hasItems = cartContex.items.length > 0;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    function cartItemRemoveHandler (id) {
      cartContex.removeItem(id);
    };

    function cartItemAddHandler (item) {
      cartContex.addItem({...item,amount:1});
    };
    const orderHandler = () => {
      setIsCheckout(true);
    };

    const submitOrderHandler = async (userData)=>{
      setIsSubmitting(true);
      await fetch('https://react-food-51739-default-rtdb.firebaseio.com/orders.json',{
        method:'POST',
        body: JSON.stringify({
          user: userData,
          orderedItens: cartContex.items
        })
      })
      setIsSubmitting(false);
      setDidSubmit(true);
      cartContex.clearCart();
    }

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
    const modalActions = (
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={style.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    );

    const cartModalContent = (
      <>
        <div className = {style.listCartItens}>
          {cartItems}
        </div>
        <div className={style.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && 
        <Checkout  onConfirm={submitOrderHandler} 
                onCancel={props.onClose} 
        />}
        {!isCheckout && modalActions}
      </>
    );

    const didSubmitModal = (
      <>
        <p>Sucessifully sent the order</p>
        <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>
        </div>
      </>
    );
    return(
        <Modal onClose={props.onClose}>
           {!isSubmitting && !didSubmit && cartModalContent}
           {!isSubmitting && didSubmit && didSubmitModal}     
        </Modal>
    )
}


export default Cart;