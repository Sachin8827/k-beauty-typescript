import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './Auth/Protected'
import { PublicRoute } from './Auth/Protected'
import * as React from 'react'
import TakeAddress from './components/auth/TakeAddress'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import OrderSummary from './pages/OrderSummary'
import Invoice from './pages/Invoice'
import './App.css'
import { ThemeContextType } from './Types/Types'
import { RootState } from './Redux/Store'
import HomePage from './pages/HomePage'
import './assets/styles/Responsive.css'
export const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleMode: () => { } });
function App() {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.user)
  const [inputFieldStatus, setInputFieldStatus] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleInputField = () => {
    setInputFieldStatus(!inputFieldStatus)
  }
  const toggleMode = () => {
    setIsDark((mode) => !mode);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.toggle('dark');
    }
  };
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleMode }} >
        <ToastContainer
        />
        <Header handleInputField={handleInputField} />
        <Routes>
          <Route path="/" element={<HomePage inputFieldStatus={inputFieldStatus} />} />
          {/* <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage inputFieldStatus={inputFieldStatus} /></ProtectedRoute>} /> */}
          <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login /></PublicRoute>} />
          <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage /></ProtectedRoute>} />
          <Route path='/invoice' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Invoice user={user} /></ProtectedRoute>} />
          <Route path='/summary' element={<ProtectedRoute isLoggedIn={isLoggedIn}><OrderSummary /></ProtectedRoute>} />
          <Route path='/address' element={<ProtectedRoute isLoggedIn={isLoggedIn}><TakeAddress /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App