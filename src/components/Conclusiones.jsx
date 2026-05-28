import React from 'react';
import { CheckCircle, AlertTriangle, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export default function Conclusiones() {
  const conclusiones = [
    {
      titulo: "Necesidad de Actualización",
      icono: <AlertTriangle className="text-purple-400" size={18} />,
      detalle: "Es urgente que Chile cuente con una Agencia de Protección de Datos moderna, ya que la actual Ley 19.628 se queda corta en sanciones frente a brechas de esta magnitud."
    },
    {
      titulo: "Impacto de la Nueva Ley",
      icono: <ShieldCheck className="text-purple-400" size={18} />,
      detalle: "La Ley 21.459 permite ahora una persecución penal más clara de los delitos de acceso e interceptación ilícita, algo que antes era difícil de tipificar."
    },
    {
      titulo: "Cultura de Seguridad",
      icono: <Cpu className="text-purple-400" size={18} />,
      detalle: "No basta con cumplir la norma; las instituciones deben adoptar estándares internacionales como ISO 27001 para mitigar el riesgo reputacional y legal."
    },
    {
      titulo: "Responsabilidad Compartida",
      icono: <Terminal className="text-purple-400" size={18} />,
      detalle: "La seguridad de la información es un pilar ético en la ingeniería, donde el resguardo de la privacidad del usuario debe ser la prioridad máxima."
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <CheckCircle className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Conclusiones del Análisis Legal
        </h2>
      </div>

      <p className="text-zinc-400 mb-6 text-sm font-mono leading-relaxed">
        Síntesis técnica y lecciones institucionales derivadas del compromiso de seguridad informática perpetrado por el grupo cibercriminal contra el ecosistema de salud nacional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conclusiones.map((c, index) => (
          <div key={index} className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-purple-900/40 transition-colors">
            <div className="flex items-center gap-2 mb-3 border-b border-zinc-900 pb-2">
              {c.icono}
              <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                {c.titulo}
              </h3>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed font-sans">
              {c.detalle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}