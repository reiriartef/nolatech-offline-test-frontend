import React, { useState } from "react";
import { Home, User, Settings, Menu } from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-full bg-gray-800 text-white ${
        isExpanded ? "w-50" : "w-15"
      } transition-width duration-300`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className={`text-xl font-bold ${!isExpanded && "hidden"}`}>
          Dashboard
        </h2>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Menu className="text-white" />
        </button>
      </div>
      <ul className="mt-4">
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <Home className="mr-2" />
          {isExpanded && <span>Inicio</span>}
        </li>
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <User className="mr-2" />
          {isExpanded && <span>Perfil</span>}
        </li>
        <li className="p-4 hover:bg-gray-700 flex items-center">
          <Settings className="mr-2" />
          {isExpanded && <span>Configuración</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
