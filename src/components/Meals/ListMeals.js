
import Card from '../Utils/Card';
import style from './ListMeals.module.css';
import MealtItem from './MealItem';

const Data = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },
];

export default function ListMeals(){

    const list = Data.map((item)=><li>{item.name}</li>)

    console.log(list)
    return (
        <div className= {style.meals}>
            <Card>
            <ul>{Data.map((item)=>(
                <MealtItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}</ul>
            </Card>
        </div>
    )
}