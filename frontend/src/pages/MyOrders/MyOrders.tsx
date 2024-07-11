import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext.tsx";
import axios from "axios";
import { assets } from "../../assets/assets.ts";
import { Order } from "../../../types";
import "./myOrders.css";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext)!;
  const [data, setData] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(response?.data?.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2 className="myordersp">My Orders</h2>
      <div className="container">
        {data?.map((order: Order, index: number) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order?.items?.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          );
        })}
        {data.length === 0 && <p>No Orders Yet</p>}
      </div>
    </div>
  );
};

export default MyOrders;
