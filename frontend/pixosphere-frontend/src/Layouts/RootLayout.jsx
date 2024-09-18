import { Outlet } from "react-router-dom";
import "./Layout.css";

const RootLayout = () => {
  return (
    <div className="layout_container">
      <Outlet />
    </div>
  );
};

export default RootLayout;
