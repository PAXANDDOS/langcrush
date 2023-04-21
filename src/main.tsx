import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, useLocation } from 'wouter'

import { GamePage } from './pages/GamePage/GamePage'
import { HomePage } from './pages/HomePage/HomePage'
import { MenuPage } from './pages/MenuPage/MenuPage'

import './index.css'

const App: React.FC = () => {
    const [location] = useLocation()

    return (
        <div className="bg-gradient-to-b from-white from-75% to-light grid place-items-center overflow-y-hidden w-screen h-screen">
            <AnimatePresence initial={false} mode="wait">
                <Switch location={location} key={location}>
                    <Route path="/" component={HomePage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/:id" component={GamePage} />
                </Switch>
            </AnimatePresence>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
