import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('token'); // Assume token storage in localStorage for auth
    return isAuthenticated ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default ProtectedRoute