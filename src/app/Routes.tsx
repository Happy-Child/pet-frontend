import React from 'react';
import { BrowserRouter, Routes as DOMRoutes, Route } from 'react-router-dom';
import { SignInPage, DashboardPage } from '@/pages';
import { ROUTES_PATHS } from '@/shared/config';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <DOMRoutes>
      <Route path={ROUTES_PATHS.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES_PATHS.SIGN_IN} element={<SignInPage />} />
    </DOMRoutes>
  </BrowserRouter>
);
