import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-7 h-screen flex-1 bg-gray-200 overflow-y-scroll">
      <Outlet />
    </div>
  );
};

export default Home;
