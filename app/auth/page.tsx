'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuthSuccess = () => {
    // Redirect to dashboard or home page after successful login/register
    router.push('/dashboard');
  };

  const switchToRegister = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            HormoneF¡t
          </h1>
          <p className="text-gray-600">
            {isLogin ? 'Welcome back!' : 'Join us today!'}
          </p>
        </div>
        
        {isLogin ? (
          <LoginForm 
            onSuccess={handleAuthSuccess}
            onSwitchToRegister={switchToRegister}
          />
        ) : (
          <RegisterForm 
            onSuccess={handleAuthSuccess}
            onSwitchToLogin={switchToLogin}
          />
        )}
      </div>
    </div>
  );
} 