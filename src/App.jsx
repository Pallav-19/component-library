import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex overflow-y-auto max-h-screen overflow-hidden">
      <Sidebar />

      <Home />
    </div>
  );
}

export default App;
