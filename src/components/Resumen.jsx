import React from 'react';
import { FileText, Users, AlertCircle } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <FileText className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Resumen Ejecutivo: Incidente Clínica Dávila
        </h2>
      </div>

      <div className="space-y-6 font-sans">
        <div className="bg-black border border-zinc-900 rounded-xl p-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono mb-2">&gt; ¿Qué pasó?</h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            La Clínica Dávila fue víctima de un ataque de ransomware perpetrado por el grupo cibercriminal "Devman". Los atacantes lograron vulnerar los sistemas perimetrales, cifrar servidores críticos y extraer bases de datos con información de pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border border-zinc-900 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3 border-b border-zinc-900 pb-2">
              <Users size={18} className="text-purple-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Actores Participantes</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><span className="text-red-400 font-bold">Atacantes:</span> Grupo cibercriminal Devman.</li>
              <li><span className="text-purple-400 font-bold">Víctima:</span> Clínica Dávila y sus pacientes afectados.</li>
            </ul>
          </div>

          <div className="bg-black border border-zinc-900 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3 border-b border-zinc-900 pb-2">
              <AlertCircle size={18} className="text-purple-400" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono">Impacto del Incidente</h3>
            </div>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><span className="text-zinc-300 font-bold">Operativo:</span> Interrupción de servicios online y acceso a fichas clínicas.</li>
              <li><span className="text-zinc-300 font-bold">Privacidad:</span> Filtración de diagnósticos y datos sensibles.</li>
              <li><span className="text-zinc-300 font-bold">Legal:</span> Investigaciones y posibles demandas por la Ley 19.628.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}