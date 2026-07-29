import React, { useState } from 'react';
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { API_URL } from '../../../config';
import Logo from '../../assets/SignatureSticker.webp';

interface LoginProps {
  onLoginSuccess: (token: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, password: passwordInput })
      });
      const data = await response.json();
      if (response.ok && data.token) {
        onLoginSuccess(data.token);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-sm shadow-xl w-full max-w-md border border-slate-100">
        <div className="flex flex-col items-center text-center mb-8">
          <img src={Logo} alt="Logo" className="w-48 h-auto object-contain mb-6 drop-shadow-sm filter brightness-0" />
          <h2 className="text-2xl font-black text-slate-800">Admin Login</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-sm text-slate-900 text-sm font-semibold focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 pr-12 rounded-sm text-slate-900 text-sm font-semibold focus:border-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button type="submit" disabled={isLoggingIn} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-sm mt-6 shadow-lg shadow-blue-500/30 cursor-pointer">
            {isLoggingIn ? <Loader2 className="w-5 h-5 mx-auto animate-spin " /> : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};
