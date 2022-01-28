import React from 'react';
import { Routes } from './Routes';
import { useInitializeGlobalState } from './hooks/initialize-global-state';
import './global-styles.css';

export const App: React.FC = () => {
  useInitializeGlobalState();
  return (<Routes />);
};
