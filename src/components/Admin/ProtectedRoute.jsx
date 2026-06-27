import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { verifyAdminToken } from '../../api/adminApi';

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('checking'); // 'checking' | 'valid' | 'invalid'

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      setStatus('invalid');
      return;
    }

    verifyAdminToken()
      .then((res) => {
        if (res.success) {
          setStatus('valid');
        } else {
          localStorage.removeItem('adminToken');
          setStatus('invalid');
        }
      })
      .catch(() => {
        localStorage.removeItem('adminToken');
        setStatus('invalid');
      });
  }, []);

  if (status === 'checking') {
    return <div>Loading...</div>; // ya tera koi spinner component
  }

  if (status === 'invalid') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}