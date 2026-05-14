import React from 'react';
import { BookOpen } from 'lucide-react';

const MarcoLegal = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 text-left">
      <div className="bg-blue-900 p-4 flex items-center gap-3">
        <BookOpen className="text-blue-300" size={24} />
        <h2 className="text-xl font-bold text-white">Marco Regulatorio Aplicable</h2>
      </div>
      <div className="p-6 space-y-4 text-gray-600 text-sm md:text-base">
        <div className="border-l-4 border-blue-500 pl-4 py-1 bg-blue-50 rounded-r-lg">
          <h4 className="font-bold text-gray-900">Ley 19.628</h4>
          <p>Protección de la Vida Privada. Regula el tratamiento de los datos sensibles (salud) de los pacientes.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 py-1 bg-blue-50 rounded-r-lg">
          <h4 className="font-bold text-gray-900">Norma Técnica 152 (MINSAL)</h4>
          <p>Estándares obligatorios para la seguridad de fichas clínicas electrónicas e infraestructura sanitaria.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4 py-1 bg-blue-50 rounded-r-lg">
          <h4 className="font-bold text-gray-900">Ley 21.459</h4>
          <p>Delitos Informáticos. Define las penas para el acceso ilícito y el daño a sistemas informáticos.</p>
        </div>
      </div>
    </div>
  );
};

export default MarcoLegal;