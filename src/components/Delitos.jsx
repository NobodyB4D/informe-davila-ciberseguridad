import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Delitos() {
  const articulos = [
    {
      id: "Art. 2",
      nombre: "Acceso Ilícito",
      detalle: "Ingreso no autorizado vulnerando la seguridad perimetral de la clínica."
    },
    {
      id: "Art. 1",
      nombre: "Ataque a Integridad",
      detalle: "Cifrado de datos (Ransomware) que impide el funcionamiento hospitalario."
    },
    {
      id: "Art. 4",
      nombre: "Interceptación Ilícita",
      detalle: "Extracción de bases de datos sensibles de pacientes para servidores externos."
    },
    {
      id: "Art. 3",
      nombre: "Daño Informático",
      detalle: "Alteración o borrado de respaldos durante la ejecución del ataque."
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <AlertTriangle className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Tipificación de Delitos (Ley 21.459)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articulos.map((art, index) => (
          <div key={index} className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-purple-900/40 transition-colors">
            <div className="flex items-center gap-2 mb-2 border-b border-zinc-900 pb-2">
              <span className="text-[10px] bg-purple-950/30 border border-purple-900/50 text-purple-400 px-2 py-0.5 rounded font-mono font-bold">
                {art.id}
              </span>
              <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                {art.nombre}
              </h3>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              {art.detalle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}