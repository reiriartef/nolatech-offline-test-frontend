import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white w-64">
      <div className="p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>
      <ul className="mt-4">
        <li className="p-4 hover:bg-gray-700">Inicio</li>
        <li className="p-4 hover:bg-gray-700">Perfil</li>
        <li className="p-4 hover:bg-gray-700">Configuración</li>
      </ul>
    </div>
  );
};

export default Sidebar;
