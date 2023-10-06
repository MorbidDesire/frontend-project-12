/* eslint-disable */
import '../App.css';
import '../index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from "@reactivers/use-auth";
// import { LocalStorageProvider } from "@reactivers/use-local-storage";
import React from 'react';
import { useAuth } from './useAuth'
import Navigation from './Navigation';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import EmptyPage from './pages/EmptyPage';

const AuthProvider = ({ children }) => {
  const auth = useAuth();
  const AuthContext = React.createContext({});

  return (
    <AuthContext.Provider value={auth}>
      { children }
    </AuthContext.Provider>
  );
}

const App = () => {
  return (  
    <AuthProvider>
      <div className="d-flex flex-column h-100">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<EmptyPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;