import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.tsx";
import Header from "../../components/Header/Header.tsx";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.tsx";
import AppDownload from "../../components/AppDownload/AppDownload.tsx";

const Home = () => {
  const [category, setCategory] = useState<string>("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
