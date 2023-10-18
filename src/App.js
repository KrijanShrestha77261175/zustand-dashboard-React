import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { useState } from "react";

import Layout from "./components/Layout";

import Provider from "./components/Providers";
import AppRoutes from "./components/routes/AppRoutes";
function App() {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
}

export default App;
