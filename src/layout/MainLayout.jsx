import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;