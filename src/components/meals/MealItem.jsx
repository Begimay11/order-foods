import styled from "styled-components";
import { MealsMap } from "./MealsMap";

export const MealItem =()=> {
    const orderFoods = [
        {
          id: 1,
          foodName: "Sushi",
          foodComment: "Finest fish and veggies",
          foodPrice: 22.99,
          quantity: 1,
          button: "Add",
        },
        {
          id: 2,
          foodName: "Schnitzel",
          foodComment: "A german specialty!",
          foodPrice: 16.0,
          quantity: 1,
          button: "Add",
        },
        {
          id: 3,
          foodName: "Barbecue Burger",
          foodComment: "American, raw, meaty",
          foodPrice: 12.99,
          quantity: 1,
          button: "Add",
        },
        {
          id: 4,
          foodName: "Green Bowl",
          foodComment: "Healthy...and green...",
          foodPrice: 19.99,
          quantity: 2,
          button: "Add",
        },
      ];
    return <div>
        <MealsMap orderFoods={orderFoods}/>

    </div>
}