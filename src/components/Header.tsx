import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, User, MessageSquare, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-4xl">
        <Link to="/" className="text-2xl font-bold text-blue-500 hover-scale">Summitter</Link>
        {user ? (
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-500 transition-all"><Home /></Link>
            <Link to="/profile/username" className="text-gray-600 hover:text-blue-500 transition-all"><User /></Link>
            <Link to="/messages" className="text-gray-600 hover:text-blue-500 transition-all"><MessageSquare /></Link>
            <Link to="/settings" className="text-gray-600 hover:text-blue-500 transition-all"><Settings /></Link>
            <button onClick={handleLogout} className="text-gray-600 hover:text-red-500 transition-all"><LogOut /></button>
          </div>
        ) : (
          <Link to="/auth" className="btn btn-primary">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;