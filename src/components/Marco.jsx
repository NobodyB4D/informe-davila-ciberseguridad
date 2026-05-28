import React from 'react';
import { Scale, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function Marco() {
  return (
    <div className="bg-zinc-950 rounded-xl border border-purple-950 p-6 md:p-8 max-w-5xl mx-auto my-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
      <div className="flex items-center gap-3 border-b border-purple-900/40 pb-4 mb-6">
        <Scale className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" size={32} />
        <h2 className="text-2xl font-bold tracking-wide font-mono">
          &gt;_ Marco Normativo Nacional e Internacional
        </h2>
      </div>

      <p className="text-zinc-400 mb-6 text-sm font-mono leading-relaxed">
        A continuación se desglosan las principales normativas y regulaciones legales aplicadas al análisis del incidente de ciberseguridad que afectó a la Clínica Dávila, mapeando las leyes locales vigentes y los estándares globales frente al secuestro de infraestructura tecnológica.
      </p>

      <div className="space-y-4">
        <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-purple-900/30 transition-colors">
          <div className="flex justify-between items-center border-b border-zinc-900 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="text-purple-400" size={20} />
              <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                Ley 21.459 - Ley de Delitos Informáticos (Chile)
              </h3>
            </div>
            <span className="text-[10px] bg-purple-950/30 border border-purple-900/50 text-purple-400 px-2 py-0.5 rounded font-mono">
              Nacional
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-400 font-mono block">Análisis de Aplicabilidad:</span>
            <p className="text-zinc-300 text-xs leading-relaxed font-sans">
              Esta norma es directamente aplicable debido a que el grupo delictivo 'Devman' vulneró las barreras perimetrales de la clínica para realizar un acceso ilícito a los sistemas centralizados. El hecho concreto del caso que activa esta ley fue el despliegue del ransomware que bloqueó y encriptó de manera maliciosa los servidores operativos del recinto médico, exigiendo un pago por el rescate de las claves de descifrado.
            </p>
          </div>
        </div>

        <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-purple-900/30 transition-colors">
          <div className="flex justify-between items-center border-b border-zinc-900 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-purple-400" size={20} />
              <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                Ley 19.628 - Protección de la Vida Privada (Chile)
              </h3>
            </div>
            <span className="text-[10px] bg-purple-950/30 border border-purple-900/50 text-purple-400 px-2 py-0.5 rounded font-mono">
              Nacional
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-400 font-mono block">Análisis de Aplicabilidad:</span>
            <p className="text-zinc-300 text-xs leading-relaxed font-sans">
              Aplica estrictamente ya que el ataque informático vulneró las bases de datos institucionales que almacenaban información de miles de usuarios. En el contexto del incidente, se comprometieron de manera directa 'datos sensibles' (historiales médicos, diagnósticos y tratamientos de salud). La ley obliga a la clínica, como responsable del banco de datos, a custodiar y resguardar la confidencialidad de dicha información privada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}