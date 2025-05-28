// import { Geist, Geist_Mono } from "next/font/google";

'use client'
import './globals.css'
import { useState } from 'react'
import Header from '@/compontents/header/Header'
import React from 'react'

export default function RootLayout ({ children }) {
  const [variable, setVariable] = useState(null)

  return (
    <html lang='en'>
      <body>
        <Header setVariable={setVariable} />
        {
          React.cloneElement(children, { setVariable }) // inject as prop
        }
      </body>
    </html>
  )
}
