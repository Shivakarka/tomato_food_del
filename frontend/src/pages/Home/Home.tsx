import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.tsx";
import Header from "../../components/Header/Header.tsx";
import "./home.css";

const Home = () => {
  const [category, setCategory] = useState<string>("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
