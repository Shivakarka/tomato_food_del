import { assets } from "../../assets/assets.ts";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <img src={assets.profile_image} alt="profile image" className="profile" />
    </div>
  );
};

export default Navbar;
