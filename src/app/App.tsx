import React from 'react';
import { Routes } from './Routes';
import { useInitAppState } from './hooks/init-app-state';
import './global-styles.css';

export const App: React.FC = () => {
  useInitAppState();
  return (<Routes />);
};
