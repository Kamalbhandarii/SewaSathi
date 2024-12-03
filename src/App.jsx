import React, { useState } from "react";
// src/index.js or src/App.jsx
import './index.css';  // This should be your CSS file where you included Tailwind's imports
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from './components/SignUpPage.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-screen bg-gradient-to-r from-red-300 to-pink-300 flex items-center justify-center">
      {isLogin ? (
        <LoginPage togglePage={() => setIsLogin(false)} />
      ) : (
        <SignUpPage togglePage={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
