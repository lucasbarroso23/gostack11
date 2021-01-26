import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { userSessionResponse, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <ActivityIndicator size="large" color="#fe9000" />
      </View>
    );
  }

  return userSessionResponse ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
