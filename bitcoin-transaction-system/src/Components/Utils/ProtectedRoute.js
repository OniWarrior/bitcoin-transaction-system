import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); // Assume token storage in localStorage for auth
    return isAuthenticated ? children : <Navigate to="/Login" replace />;
};

export default ProtectedRoute