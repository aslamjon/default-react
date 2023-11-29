import React from "react";
import MainLayout from "./main/MainLayout";
import AuthLayout from "./auth/AuthLayout";
import { useLocation } from "react-router-dom";

const LayoutManager = ({ children }) => {
  const { pathname } = useLocation();

  const getLayout = (pathname) => {
    if (pathname === "/") {
      return "main";
    }
    if (/^\/auth(?=\/|$)/i.test(pathname)) {
      return "auth";
    }

    return "main";
  };

  const getLayouts = () => {
    return {
      main: MainLayout,
      auth: AuthLayout,
    };
  };

  const Layout = getLayouts()[getLayout(pathname)];
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default LayoutManager;
