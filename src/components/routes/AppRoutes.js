import React from "react";
import { NAVIGATION_ROUTES } from "./routes.constant";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../Layout";
import Test1 from "../TestComponent/Test1";
import Test2 from "../TestComponent/Test2";

const AppRoutes = () => {
  const routes = [
    {
      path: NAVIGATION_ROUTES.DASHBOARD,
      element: (
        <Layout>
          <Test1 />
        </Layout>
      ),
    },
    {
      path: NAVIGATION_ROUTES.CHART,
      element: (
        <Layout>
          <Test2 />
        </Layout>
      ),
    },
  ];

  const route = useRoutes(routes);
  return route;
};

export default AppRoutes;
