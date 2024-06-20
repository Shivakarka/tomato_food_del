import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.tsx";
import Header from "../../components/Header/Header.tsx";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.tsx";

const Home = () => {
  const [category, setCategory] = useState<string>("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;
