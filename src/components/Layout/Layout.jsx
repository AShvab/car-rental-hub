import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    // <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", background: "#0f2d75" }}>
    <div style={{ margin: "0 auto" }}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
