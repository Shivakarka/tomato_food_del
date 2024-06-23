import Navbar from "./components/Navbar/Navbar.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
