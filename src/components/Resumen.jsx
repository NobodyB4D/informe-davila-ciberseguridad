import React from 'react';
import { Shield } from 'lucide-react';

const Resumen = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 text-left">
      <div className="bg-slate-800 p-4 flex items-center gap-3">
        <Shield className="text-blue-400" size={24} />
        <h2 className="text-xl font-bold text-white">Resumen Ejecutivo: Incidente Clínica Dávila</h2>
      </div>
      
      <div className="p-6 space-y-6 text-gray-600">
        <section>
          <h4 className="font-bold text-gray-900 mb-2">¿Qué pasó?</h4>
          <p>La Clínica Dávila fue víctima de un ataque de ransomware perpetrado por el grupo cibercriminal "Devman". Los atacantes lograron vulnerar los sistemas perimetrales, cifrar servidores críticos y extraer bases de datos con información de pacientes.</p>
        </section>

        <section>
          <h4 className="font-bold text-gray-900 mb-2">Actores Participantes</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Atacantes:</strong> Grupo cibercriminal Devman.</li>
            <li><strong>Víctima:</strong> Clínica Dávila y sus pacientes afectados.</li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-gray-900 mb-2">Impacto del Incidente</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Operativo:</strong> Interrupción de servicios online y acceso a fichas clínicas.</li>
            <li><strong>Privacidad:</strong> Filtración de diagnósticos y datos sensibles.</li>
            <li><strong>Legal:</strong> Investigaciones y posibles demandas por la Ley 19.628.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resumen;