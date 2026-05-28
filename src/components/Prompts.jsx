import React from 'react';
import { Terminal, Code, MessageSquare, CheckCircle, FileCode } from 'lucide-react';

export default function Prompts() {
  const bitacora = [
    {
      id: "01",
      titulo: "Definición del Caso y Estructura",
      seccion: "01_resumen_ibamar.md y 02_marco_ibamar.md",
      uso: "Se solicitó apoyo para organizar los hechos cronológicos del caso Clínica Dávila y seleccionar las leyes chilenas más relevantes.",
      prompt: "Ayúdame a estructurar un resumen ejecutivo sobre el incidente de la Clínica Dávila y dime qué leyes chilenas aplican a este sector.",
      resultado: "Se aceptó la sugerencia de incluir la Ley 19.628 y la Norma 152 del MINSAL. Se ajustó la redacción para que fuera más sintética y profesional."
    },
    {
      id: "02",
      titulo: "Análisis Legal y Tipificación",
      seccion: "03_delitos_ibamar.md y 05_responsabilidades_ibamar.md",
      uso: "Se utilizó para validar que las acciones del grupo atacante coincieran correctamente con los artículos de la Ley 21.459.",
      prompt: "¿Cómo se vincula el uso de ransomware con los artículos específicos de la Ley 21.459 de delitos informáticos?",
      resultado: "La IA sugirió el Art. 1 y Art. 2. Se verificó manualmente la coherencia con el caso y se redactaron las justificaciones técnicas presentes en el informe."
    },
    {
      id: "03",
      titulo: "Mejora de Redacción y Formato",
      seccion: "Todos los archivos .md",
      uso: "Revisión de estilo, ortografía y formato de tablas en Markdown.",
      prompt: "Revisa la redacción de este párrafo para que suene más técnico y asegúrate de que la tabla comparativa de industrias sea clara.",
      resultado: "Se adoptaron mejoras en la terminología técnica (ej. cambiar 'hackeo' por 'vulneración de seguridad perimetral') y se optimizó la visualización de los datos."
    },
    {
      id: "04",
      titulo: "Apoyo en Desarrollo Web (React/Tailwind)",
      seccion: "Componentes .jsx",
      uso: "Generación de estructuras base para los componentes de la interfaz.",
      prompt: "Crea un componente en React que use Tailwind CSS para mostrar contenido de texto en una tarjeta con sombras y bordes redondeados, incluyendo un icono de Lucide.",
      resultado: "Se utilizó el código base generado y se personalizó con los colores y la jerarquía de títulos requerida para el proyecto."
    }
  ];

  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <Terminal className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Bitácora de Interacción con IA
        </h2>
      </div>

      <p className="text-zinc-400 mb-6 text-sm font-mono leading-relaxed">
        Registro transparente de comandos, prompts y refinamientos técnicos utilizados en la co-creación de este informe de auditoría de ciberseguridad.
      </p>

      <div className="flex flex-col gap-6 font-mono text-xs">
        {bitacora.map((item, index) => (
          <div key={index} className="border border-zinc-900 bg-black rounded-xl overflow-hidden hover:border-purple-900/40 transition-colors">
            <div className="bg-zinc-900/50 px-4 py-3 border-b border-zinc-900 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="text-purple-400">[{item.id}]</span>
                <h3>{item.titulo}</h3>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
                <FileCode size={13} />
                <span>{item.seccion}</span>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <span className="text-purple-500 font-bold block mb-1"># CONTEXTO DE USO:</span>
                <p className="text-zinc-300 pl-4 border-l border-zinc-800 font-sans text-sm">{item.uso}</p>
              </div>

              <div className="bg-zinc-950 p-3 rounded-lg border border-purple-950/30">
                <div className="flex items-center gap-1.5 text-purple-400 font-bold mb-1">
                  <MessageSquare size={13} />
                  <span>user@inacap:~$&nbsp;</span>
                  <span className="text-zinc-400 font-normal">prompt_init</span>
                </div>
                <p className="text-zinc-200 pl-4 italic bg-black/40 py-2 rounded border border-zinc-900">"{item.prompt}"</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <CheckCircle size={13} />
                  <span>&gt;_ STDOUT / RESULTADO APLICADO:</span>
                </div>
                <p className="text-zinc-400 pl-4 border-l border-zinc-800 font-sans text-sm">{item.resultado}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}