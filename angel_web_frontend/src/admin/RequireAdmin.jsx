import { Navigate } from 'react-router-dom';
import { isAdminAuthenticated } from './adminAuth';

export default function RequireAdmin({ children }) {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

