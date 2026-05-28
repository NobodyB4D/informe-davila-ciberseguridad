import React from 'react';
import { Users, Shield, Building, UserCheck, Gavel, Scale, FileText } from 'lucide-react';

export default function Responsabilidades() {
  const actores = [
    {
      nombre: "Grupo Atacante (Devman)",
      icono: <Shield className="text-red-400 drop-shadow-[0_0_4px_rgba(248,113,113,0.4)]" size={24} />,
      descripcion: "Autores materiales del despliegue del ransomware y la sustracción de credenciales corporativas.",
      responsabilidades: [
        {
          tipo: "Responsabilidad Penal",
          icono: <Gavel size={14} className="text-purple-400" />,
          norma: "Ley 21.459 (Arts. 1, 2, 3 y 4)",
          detalle: "Sujetos a penas de presidio menor en sus grados mínimo a medio por los delitos concurrentes de acceso ilícito, interceptación ilícita de redes y ataque a la integridad de un sistema informático."
        },
        {
          tipo: "Responsabilidad Civil",
          icono: <Scale size={14} className="text-purple-400" />,
          norma: "Artículo 2314 del Código Civil",
          detalle: "Obligación legal implícita de indemnizar solidariamente todo perjuicio patrimonial y operativo causado directamente a la infraestructura de la clínica y de forma derivada a los usuarios."
        }
      ]
    },
    {
      nombre: "Clínica Dávila (Persona Jurídica)",
      icono: <Building className="text-purple-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.4)]" size={24} />,
      descripcion: "Entidad prestadora de salud y custodio legal de los bancos de datos médicos vulnerados.",
      responsabilidades: [
        {
          tipo: "Responsabilidad Civil",
          icono: <Scale size={14} className="text-purple-400" />,
          norma: "Ley 19.628 (Artículo 23)",
          detalle: "Obligación de reparar el daño moral y patrimonial causado a los pacientes debido a la falta de diligencia en la custodia y el tratamiento indebido de la información confidencial filtrada."
        },
        {
          tipo: "Responsabilidad Administrativa",
          icono: <FileText size={14} className="text-purple-400" />,
          norma: "Norma Técnica N° 152 (MINSAL)",
          detalle: "Exposición a sumarios sanitarios y multas institucionales severas aplicadas por la Superintendencia de Salud por fallas en los controles de disponibilidad y continuidad de las fichas clínicas."
        }
      ]
    },
    {
      nombre: "Directivos y Ejecutivos de la Empresa",
      icono: <UserCheck className="text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]" size={24} />,
      descripcion: "Administradores responsables de la toma de decisiones estratégicas y asignación de presupuestos de TI.",
      responsabilidades: [
        {
          tipo: "Responsabilidad Administrativa",
          icono: <FileText size={14} className="text-purple-400" />,
          norma: "Reglamentos Internos Corporativos",
          detalle: "Potencial remoción de cargos, destitución o término de contratos sin derecho a indemnización por negligencia en el cumplimiento de los deberes de cuidado sobre los activos de información."
        },
        {
          tipo: "Responsabilidad Civil Individual",
          icono: <Scale size={14} className="text-purple-400" />,
          norma: "Leyes Generales de Sociedades",
          detalle: "Responsabilidad personal frente a los accionistas y la junta directiva por la falta de implementación de políticas de análisis de riesgos informáticos y mitigación de ransomware."
        }
      ]
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <Users className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Atribución de Responsabilidades Legales
        </h2>
      </div>

      <p className="text-zinc-400 mb-6 leading-relaxed text-sm font-mono">
        Desglose analítico de los actores involucrados en el incidente de seguridad y la diferenciación de sus responsabilidades penales, civiles y administrativas vigentes.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {actores.map((actor, idx) => (
          <div key={idx} className="border border-zinc-800 bg-black rounded-xl p-5 hover:border-purple-900/50 transition-colors">
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3 mb-4">
              {actor.icono}
              <div>
                <h3 className="text-base font-bold text-white font-mono tracking-wide">{actor.nombre}</h3>
                <p className="text-zinc-500 text-xs mt-0.5">{actor.descripcion}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actor.responsabilidades.map((resp, rIdx) => (
                <div key={rIdx} className="bg-zinc-950 p-4 rounded-lg border border-zinc-900 hover:border-purple-950/40 transition-colors">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-purple-400">
                      {resp.icono}
                      <span>{resp.tipo}</span>
                    </div>
                    <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                      {resp.norma}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-xs leading-relaxed font-sans">{resp.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}