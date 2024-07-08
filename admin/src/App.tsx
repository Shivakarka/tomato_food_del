import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Add from "./pages/Add/Add.tsx";
import List from "./pages/List/List.tsx";
import Orders from "./pages/Orders/Orders.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const url = "http://localhost:4000";

  return (
    <>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
