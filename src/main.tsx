import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HomePage } from './pages/HomePage/HomePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <main className="bg-gradient-to-b from-white from-75% to-regal-white px-4">
            <HomePage />
        </main>
    </React.StrictMode>
)
