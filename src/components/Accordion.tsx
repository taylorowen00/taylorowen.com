'use client'

import { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-heading)',
          fontSize: '20px',
          color: 'var(--color-text)',
          textAlign: 'left',
        }}
      >
        {title}
        <span style={{
          fontSize: '24px',
          fontWeight: 300,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ paddingBottom: isOpen ? '20px' : '0' }}
      >
        {children}
      </div>
    </div>
  )
}
