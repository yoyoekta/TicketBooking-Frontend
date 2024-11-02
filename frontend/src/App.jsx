import { Outlet } from "react-router-dom";
import Navbar from "./CustomComponents/Navbar";
import Footer from "./CustomComponents/Footer";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
