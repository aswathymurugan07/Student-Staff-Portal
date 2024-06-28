import React, { useContext } from 'react';
import AppProvider, { AppContext } from './context/context';
import Header from './Components/Header';
import './App.css'
import StudentMark from './Components/StudentMark';
import { Outlet } from 'react-router-dom';

const AppContent = () => {
  // const { isStaffView } = useContext(AppContext);

  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
