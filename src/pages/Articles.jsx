import React from 'react'

export default function Articles() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Artículos recientes</h2>
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-lg font-semibold">TITULO 1</h3>
        <p className="text-gray-700">Descripción 1...</p>
      </div>
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-lg font-semibold">TITULO 2</h3>
        <p className="text-gray-700">Descripción 2...</p>
      </div>
    </div>
  )
}