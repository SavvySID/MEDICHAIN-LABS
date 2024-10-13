import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import { AuthProvider } from './context/AuthContext';
import { BlockchainProvider } from './context/BlockchainContext';
import HealthRecords from './pages/HealthRecords';
import InsurancePage from './pages/InsurancePage';
import ViewRecord from './pages/ViewRecord';
import Dashboard from './components/Dashboard';
import Permissions from './components/Permissions';
import ProviderDashboard from './pages/ProviderDashboard';
import UserDashboard from './pages/UserDashboard';  
import Settings from './pages/Settings';
import Help from './pages/Help';
import EditPermissions from './pages/EditPermissions';
import Register from './pages/Register';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import WalletConnect from './components/WalletConnect';

// CSS files
import './styles/main.css';
import './styles/App.css';
import './styles/components.css';
import './styles/index.css';
import './styles/utilities.css';
import './components/WalletConnect.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ForgotPassword from './pages/ForgotPass';


const App = () => {
  return (
    <AuthProvider>
      <BlockchainProvider>
        <Router>
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar />
              <main className="main-content">
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/Register" element={<Register />} />
                  <Route path="/Forgot-Password" element={<ForgotPassword />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<TermsAndConditions />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Connect-Wallet" element={<WalletConnect />} />

                  {/* Sidebar Pages */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/health-records" element={<HealthRecords />} />
                  <Route path="/Insurance" element={<InsurancePage />} />
                  <Route path="/permissions" element={<Permissions />} />
                  <Route path="/edit-permissions" element={<EditPermissions />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/provider-dashboard" element={<ProviderDashboard />} />
                  <Route path="/user-dashboard" element={<UserDashboard />} />
                  <Route path="/View-Record" element={<ViewRecord />} />
                  
                  {/* About and Additional Pages */}
                  <Route path="/about" element={<About />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </Router>
      </BlockchainProvider>
    </AuthProvider>
  );
};

export default App;
