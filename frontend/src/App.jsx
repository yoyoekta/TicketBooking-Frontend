import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
