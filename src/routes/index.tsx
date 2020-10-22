import React from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { useAuth } from '../contexts/auth';

const Routes = () => {
  const { logged } = useAuth();

  return (logged ? <AppRoutes /> : <AuthRoutes />)
};

export default Routes;