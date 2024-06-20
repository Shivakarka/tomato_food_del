import "./foodDisplay.css"

import {FoodItemType} from "../../../types";
import FoodItem from "../FoodItem/FoodItem.tsx";
import {useContext} from "react";
import {StoreContext} from "../../context/StoreContext.tsx";


const FoodDisplay = ({category}:{category:string}) => {

    const data = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near to you</h2>
            <div className="food-display-list">
                {data?.food_list?.map((item : FoodItemType, index:number)=>{
                    if(category==="All"||category===item.category){
                        return  <FoodItem key={index} id={item._id}
                                          name={item.name }
                                          description={item.description} price={item.price} image={item.image} />
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay