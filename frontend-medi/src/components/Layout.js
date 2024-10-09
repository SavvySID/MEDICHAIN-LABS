import { useLocation } from 'react-router-dom';
import Header from './Header';  // Import your Header component
import Sidebar from './Sidebar'; // Import your Sidebar component
import Footer from './Footer';   // Import your Footer component

const Layout = ({ children }) => {
    const location = useLocation();

    // Conditionally hide header, footer, and sidebar on the login page
    const hideLayout = location.pathname === '/login';

    return (
        <div className="app-layout">
            {!hideLayout && <Header />}       {/* Show header if not on login */}
            <div className="main-content">
                {!hideLayout && <Sidebar />}   {/* Show sidebar if not on login */}
                <div className="page-content">
                    {children}                 {/* The child components will be rendered here */}
                </div>
            </div>
            {!hideLayout && <Footer />}       {/* Show footer if not on login */}
        </div>
    );
};

export default Layout;
