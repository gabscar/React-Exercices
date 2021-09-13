import { useContext } from 'react';
import style from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../store/CartContext'

function MealtItem(props){
    const cartContex = useContext(CartContext);

     const addToCartHandler = (amount) => {
        cartContex.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });
    }; 
    return(
        <li>
            <div>
                <h3>{props.name}</h3>
                <div className={style.description}>{props.description}</div>
                <div className={style.price}> R${props.price } </div>
            </div>
            <div>
                <MealItemForm id ={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}



export default MealtItem;