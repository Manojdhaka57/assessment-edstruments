import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Layout from '../components/Layout/Layout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import VendorDetails from '../pages/Form/VendorDetails.jsx';
import { ROUTES } from '../utils/index.js';
import PageNotFound from '../pages/PageNotFound/PageNotFound.js';

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route
          index
          path={ROUTES.LOGIN}
          element={
            <PublicRoute isAuthCheck={true}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/'
          element={<Navigate to={ROUTES.LOGIN} replace={true} />}
        />
        <Route
          path={ROUTES.VENDOR_DETAILS}
          element={
            <PrivateRoute>
              <VendorDetails />
            </PrivateRoute>
          }
        />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
