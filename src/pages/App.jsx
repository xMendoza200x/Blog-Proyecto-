import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Blog</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
          <Link to="/articles" className="hover:text-gray-400">Artículos</Link>
          <Link to="/categories" className="hover:text-gray-400">Categorías</Link>
        </nav>
      </header>
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">¡Bienvenido!</h2>
        <p>Explora las principales categorias en tendencia!</p>
      </main>
    </div>
  )
}