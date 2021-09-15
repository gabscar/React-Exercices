
import { useEffect, useState } from 'react';

import Card from '../Utils/Card';
import style from './ListMeals.module.css';
import MealtItem from './MealItem';



export default function ListMeals(){

    const [listMeals,setListMeals] = useState([]);
    const [isLoadding,setIsLoadding] = useState(false);
    const [httpError,setHttpError]= useState('');
    useEffect(()=>{     
      getList().catch((err)=>{
        setIsLoadding(false);
        setHttpError(err.message);
      });       
    },[])

    async function getList(){
      setIsLoadding(true);
      const response = await fetch('https://react-food-51739-default-rtdb.firebaseio.com/meals.json');
      
      if(!response.ok){
        throw new Error("Someting wnt wrong");
      }
      
      let Data = await response.json();
      Data = Data.meals;
      console.log(Data)
      const loadMeals = [];
      for (let i in Data){
        loadMeals.push({
          id:i,
          name:Data[i].name,
          description:Data[i].description,
          price: Data[i].price
        })
      }
      setListMeals(loadMeals);
      setIsLoadding(false);
    }

    const loadingP = (<Card><p className = {style.loading}>Loading ...</p></Card>);
    const cardFood = (
          <Card>
            <ul>{listMeals.map((item)=>(
                <MealtItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}</ul>
          </Card>
    )
    const errorP = (<Card><p className = {style.error}>{httpError}</p></Card>)
    return (
        <div className= {style.meals}>
           {!isLoadding && httpError =='' ? cardFood
            : httpError != '' ? errorP : loadingP}
        </div>
    )
}