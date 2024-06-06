import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomeLayout;
