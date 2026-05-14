import React from 'react'
import Resumen from './components/Resumen'
import MarcoLegal from './components/MarcoLegal'
import Delitos from './components/Delitos'

function App() {
  return (
    <div className="report-container">
      <header>
        <h1>Análisis Ciberseguridad: Clínica Dávila</h1>
        <p className="subtitle">Informe Técnico - Martín Alejandro Ibarra Miranda</p>
      </header>

      <main>
        <section>
          <h2>1. Resumen Ejecutivo del Incidente</h2>
          <Resumen />
        </section>

        <section>
          <h2>2. Marco Regulatorio Chileno</h2>
          <MarcoLegal />
        </section>

        <section>
          <h2>3. Tipificación de Delitos (Ley 21.459)</h2>
          <Delitos />
        </section>
      </main>

      <footer>
        INACAP Valparaíso | Fundamentos de Ciberseguridad | 2026
      </footer>
    </div>
  )
}

export default App