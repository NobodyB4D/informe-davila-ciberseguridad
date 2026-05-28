import React from 'react';
import { BarChart2, Activity, DollarSign, Zap } from 'lucide-react';

export default function Comparacion() {
  const industrias = [
    {
      name: "Salud (Clínica Dávila)",
      icon: <Activity className="text-purple-400" size={18} />,
      normativa: "Ley 19.628 y Norma Técnica 152 MINSAL.",
      dato: "Datos Sensibles (Fichas clínicas y diagnósticos).",
      plazo: "Reporte a la autoridad sanitaria y pacientes afectados.",
      aplicabilidad: "Directa. El secuestro de infraestructura tecnológica bloqueó el acceso a historiales médicos y expuso datos de salud altamente protegidos por la legislación nacional."
    },
    {
      name: "Financiera (Banca)",
      icon: <DollarSign className="text-emerald-400" size={18} />,
      normativa: "Recopilación Actualizada de Normas (CMF).",
      dato: "Datos Financieros y Secreto Bancario.",
      plazo: "Reporte inmediato a la CMF (minutos/horas).",
      aplicabilidad: "Comparativa. A diferencia de la banca, cuyo foco crítico es detener el fraude de capitales de forma inmediata, en salud una brecha paraliza la atención médica vital."
    },
    {
      name: "Infraestructura Crítica (Energía/Copec)",
      icon: <Zap className="text-amber-400" size={18} />,
      normativa: "Ley Marco de Ciberseguridad (Ley 21.663).",
      dato: "Continuidad de servicios esenciales.",
      plazo: "Reporte obligatorio al CSIRT Nacional (máximo 3 horas).",
      aplicabilidad: "Hipotética. Si el recinto médico fuese catalogado como Operador de Importancia Vital (OIV) bajo esta nueva ley, habría tenido la obligación penal de reportar en menos de 3 horas."
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-6xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <BarChart2 className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-black mb-6">
        <table className="w-full text-left border-collapse font-mono text-xs">
          <thead>
            <tr className="border-b border-purple-900/40 bg-zinc-900/50 text-purple-400">
              <th className="p-4 font-bold uppercase tracking-wider">Sector / Industria</th>
              <th className="p-4 font-bold uppercase tracking-wider">Normativa Principal</th>
              <th className="p-4 font-bold uppercase tracking-wider">Tipo de Dato Protegido</th>
              <th className="p-4 font-bold uppercase tracking-wider">Plazo de Reporte</th>
              <th className="p-4 font-bold uppercase tracking-wider text-purple-300 bg-purple-950/20 border-l border-purple-900/30">Aplicabilidad al Caso</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900 text-zinc-300">
            {industrias.map((row, index) => (
              <tr key={index} className="hover:bg-zinc-900/30 transition-colors">
                <td className="p-4 font-bold text-white bg-zinc-950">
                  <div className="flex items-center gap-2">
                    {row.icon}
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className="p-4 leading-relaxed max-w-xs">{row.normativa}</td>
                <td className="p-4 leading-relaxed max-w-xs text-zinc-400">{row.dato}</td>
                <td className="p-4 leading-relaxed max-w-xs">{row.plazo}</td>
                <td className="p-4 leading-relaxed max-w-sm bg-purple-950/10 text-zinc-200 border-l border-purple-900/30 font-sans text-sm">
                  {row.aplicabilidad}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-zinc-900/40 border border-purple-950 rounded-lg p-4 font-mono text-xs text-zinc-400 leading-relaxed">
        <span className="text-purple-400 font-bold block mb-1">&gt;_ Análisis de Entorno:</span>
        Mientras que en la banca el foco es el fraude financiero, en la salud el impacto es la privacidad y la integridad de la vida de las personas.
      </div>
    </div>
  );
}