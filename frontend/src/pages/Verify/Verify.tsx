import { useContext, useEffect, useState } from "react";
import "./verify.css";
import { StoreContext } from "../../context/StoreContext.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext)!;
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/myorders");
      } else {
        navigate("/");
        toast(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  if (error) {
    return (
      <div className="error">
        <h1>Something went wrong</h1>
        <p>Please try again later</p>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
