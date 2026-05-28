import React, { useState } from 'react';
import { Shield, FileText, Scale, AlertTriangle, BarChart2, Users, Database, CheckCircle, Terminal } from 'lucide-react';
import Resumen from './components/Resumen';
import Marco from './components/Marco';
import Delitos from './components/Delitos';
import Comparacion from './components/Comparacion';
import Responsabilidades from './components/Responsabilidades';
import Datos from './components/Datos';
import Conclusiones from './components/Conclusiones';
import Prompts from './components/Prompts';

export default function App() {
  const [seccionActual, setSeccionActual] = useState('resumen');

  const pestañas = [
    { id: 'resumen', label: '1. Resumen', icon: <FileText size={16} /> },
    { id: 'marco', label: '2. Marco Normativo', icon: <Scale size={16} /> },
    { id: 'delitos', label: '3. Tipificación Delitos', icon: <AlertTriangle size={16} /> },
    { id: 'comparacion', label: '4. Comparación Marcos', icon: <BarChart2 size={16} /> },
    { id: 'responsabilidades', label: '5. Responsabilidades', icon: <Users size={16} /> },
    { id: 'datos', label: '6. Datos Personales', icon: <Database size={16} /> },
    { id: 'conclusiones', label: '7. Conclusiones', icon: <CheckCircle size={16} /> },
    { id: 'prompts', label: '8. Bitácora IA', icon: <Terminal size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col selection:bg-purple-500/30">
      <header className="bg-zinc-950 text-white py-6 px-6 border-b border-purple-900/40 shadow-[0_4px_20px_rgba(168,85,247,0.15)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield size={36} className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                Análisis Ciberseguridad: <span className="text-purple-400">Clínica Dávila</span>
              </h1>
              <p className="text-zinc-400 text-xs mt-0.5 font-mono">
                T13034 Fundamentos de Seguridad de la Información
              </p>
            </div>
          </div>
          <div className="text-right text-xs text-zinc-500 hidden sm:block font-mono">
            <p>Estudiante: Martín Alejandro Ibarra Miranda</p>
            <p>INACAP Valparaíso | 2026</p>
          </div>
        </div>
      </header>

      <nav className="bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-1">
          {pestañas.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSeccionActual(tab.id)}
              className={`flex items-center gap-2 py-3.5 px-3 border-b-2 text-xs font-semibold font-mono transition-all duration-200 ${
                seccionActual === tab.id
                  ? 'border-purple-500 text-purple-400 bg-purple-950/20'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        {seccionActual === 'resumen' && <Resumen />}
        {seccionActual === 'marco' && <Marco />}
        {seccionActual === 'delitos' && <Delitos />}
        {seccionActual === 'comparacion' && <Comparacion />}
        {seccionActual === 'responsabilidades' && <Responsabilidades />}
        {seccionActual === 'datos' && <Datos />}
        {seccionActual === 'conclusiones' && <Conclusiones />}
        {seccionActual === 'prompts' && <Prompts />}
      </main>

      <footer className="bg-zinc-950 text-zinc-600 text-xs py-4 px-6 border-t border-zinc-900 font-mono">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>&gt;_ Estudiante: Martín Alejandro Ibarra Miranda</span>
          <span>Docente: Rubén Schnettler L.</span>
        </div>
      </footer>
    </div>
  );
}