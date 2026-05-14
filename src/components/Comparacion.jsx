import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Comparacion = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 text-left">
      <div className="bg-indigo-900 p-4 flex items-center gap-3">
        <LayoutGrid className="text-indigo-300" size={24} />
        <h2 className="text-xl font-bold text-white">Comparativa Industrial</h2>
      </div>
      <div className="p-6 overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 font-bold">
            <tr>
              <th className="px-4 py-2 border">Factor</th>
              <th className="px-4 py-2 border">Salud (Clínica)</th>
              <th className="px-4 py-2 border">Banca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Dato Crítico</td>
              <td className="px-4 py-2 border">Diagnósticos/Salud</td>
              <td className="px-4 py-2 border">Fondos/Transacciones</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Prioridad</td>
              <td className="px-4 py-2 border">Vida e Integridad</td>
              <td className="px-4 py-2 border">Patrimonio y Fraude</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparacion;