import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../providers/AuthProvider";
import VendorDetails from "../pages/Form/VendorDetails.jsx";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthCheck={true}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/vendor-details"
          element={
            <PrivateRoute>
              <VendorDetails />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<>page not found</>} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
