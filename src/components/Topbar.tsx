import React, { useState, useEffect, useRef } from "react";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getRouteName = (pathname: string) => {
    switch (pathname) {
      case "/empleados":
        return "Empleados";
      // Agrega más rutas aquí según sea necesario
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{getRouteName(location.pathname)}</h1>
      <div className="relative flex items-center space-x-4">
        <User
          className="w-10 h-10 rounded-full cursor-pointer mr-4"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-12 mt-2 w-48 bg-white border rounded shadow-lg"
          >
            <ul>
              <li
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={handleLogout}
              >
                <LogOut className="mr-2" />
                Cerrar sesión
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
