import React from 'react';
import { Gavel } from 'lucide-react';

const Delitos = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 text-left">
      <div className="bg-red-800 p-4 flex items-center gap-3">
        <Gavel className="text-red-300" size={24} />
        <h2 className="text-xl font-bold text-white">Tipificación (Ley 21.459)</h2>
      </div>
      <div className="p-6 grid gap-4 md:grid-cols-2 text-sm">
        <div className="p-3 bg-gray-50 rounded border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900">Art. 2: Acceso Ilícito</h4>
          <p>Ingreso no autorizado vulnerando la seguridad perimetral de la clínica.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900">Art. 1: Ataque a Integridad</h4>
          <p>Cifrado de datos (Ransomware) que impide el funcionamiento hospitalario.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900">Art. 4: Interceptación Ilícita</h4>
          <p>Extracción de bases de datos sensibles de pacientes para servidores externos.</p>
        </div>
        <div className="p-3 bg-gray-50 rounded border-l-4 border-red-600">
          <h4 className="font-bold text-gray-900">Art. 3: Daño Informático</h4>
          <p>Alteración o borrado de respaldos durante la ejecución del ataque.</p>
        </div>
      </div>
    </div>
  );
};

export default Delitos;