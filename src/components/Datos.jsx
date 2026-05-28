import React from 'react';
import { Database, ShieldAlert, Eye, RefreshCw, Trash2, XCircle } from 'lucide-react';

export default function Datos() {
  const derechos = [
    {
      letra: "A",
      nombre: "Acceso",
      icono: <Eye className="text-purple-400" size={20} />,
      detalle: "El derecho de los pacientes a saber qué datos específicos de su ficha clínica fueron comprometidos en la brecha de seguridad informática."
    },
    {
      letra: "R",
      nombre: "Rectificación",
      icono: <RefreshCw className="text-purple-400" size={20} />,
      detalle: "Si durante el ataque de ransomware o en el proceso de recuperación de los respaldos la información de salud fue alterada, el paciente puede exigir su corrección inmediata."
    },
    {
      letra: "C",
      nombre: "Cancelación",
      icono: <Trash2 className="text-purple-400" size={20} />,
      detalle: "Los pacientes pueden solicitar la eliminación de sus datos si estos ya no son necesarios para la finalidad de su atención, especialmente si la clínica no puede garantizar su seguridad."
    },
    {
      letra: "O",
      nombre: "Oposición",
      icono: <XCircle className="text-purple-400" size={20} />,
      detalle: "Derecho a oponerse a que sus datos personales sean utilizados para fines distintos a la atención médica tras la pérdida de confianza institucional por el incidente."
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <Database className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Gobierno de Datos y Derechos ARCO
        </h2>
      </div>

      <div className="bg-black border border-red-950/40 p-5 rounded-xl mb-6 flex gap-4 items-start">
        <div className="bg-red-950/20 p-2 rounded-lg border border-red-900/30 text-red-400 shrink-0">
          <ShieldAlert size={24} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-1">
            Clasificación Crítica: Datos Sensibles
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed font-sans">
            La información vulnerada en la Clínica Dávila (diagnósticos, exámenes y tratamientos) se clasifica legalmente como <strong className="text-red-400 font-mono">datos sensibles</strong>. Según el Art. 2 de la Ley 19.628, estos datos gozan de la máxima protección penal y solo pueden ser tratados si la ley lo autoriza de forma expresa, existe consentimiento explícito del titular o son estrictamente necesarios para la determinación de beneficios de salud.
          </p>
        </div>
      </div>

      <p className="text-zinc-400 mb-6 text-xs font-mono tracking-wide">
        [!] Matriz de exigencia legal para la activación de derechos fundamentales por parte de los titulares de datos afectados:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {derechos.map((d, index) => (
          <div key={index} className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-purple-900/40 transition-colors">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-purple-950/30 text-purple-400 border border-purple-900/30 w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm">
                  {d.letra}
                </div>
                <h4 className="text-sm font-bold text-white font-mono tracking-wide">
                  Derecho de {d.nombre}
                </h4>
              </div>
              {d.icono}
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed font-sans">
              {d.detalle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}