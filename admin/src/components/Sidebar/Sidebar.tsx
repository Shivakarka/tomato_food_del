import { assets } from "../../assets/assets";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="add icon" />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option ">
          <img src={assets.list_icon} alt="list icon" className="list-icon" />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
