import React from 'react'
import Image from 'next/image'

// Define las props del componente.
interface InfoBlockProps {
  title: string;
  subtitulo?: string;
  descripcion?: string;
  iconoUrl?: string;
  colorAcento?: string;
}

//  Define el componente como una función de React.
export const InfoBlock: React.FC<InfoBlockProps> = ({ 
  title, 
  subtitulo, 
  descripcion, 
  iconoUrl, 
  colorAcento, 
  
}) => {
  
   
  // Usa los props dentro del componente.

  return (
    <div className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm">
      <div
        className="flex items-center justify-center rounded-md w-12 h-12 flex-shrink-0"
        style={{
          backgroundColor: `${colorAcento}20`,
        }}
      >
        {iconoUrl ? (
    
          <img src={iconoUrl} alt={title || 'icon'} style={{ width: 28, height: 28 }} />
        ) : (
          <div style={{ width: 28, height: 28, background: colorAcento, borderRadius: 4 }} />
        )}
      </div>
    
      <div className="flex-1">
        <h3 className="text-lg font-semibold" style={{ color: colorAcento }}>{title}</h3>
        {subtitulo && <div className="text-sm text-gray-600 mt-1">{subtitulo}</div>}
        {descripcion && <p className="text-gray-700 mt-2">{descripcion}</p>}
        
        
      </div>
    </div>
  )
}
