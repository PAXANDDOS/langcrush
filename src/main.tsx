import { AnimatePresence } from 'framer-motion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Switch, useLocation } from 'wouter'

import { GamePage } from './pages/GamePage/GamePage'
import { HomePage } from './pages/HomePage/HomePage'
import { MenuPage } from './pages/MenuPage/MenuPage'

import './index.css'

const App: React.FC = () => {
    const location = useLocation()[0]

    return (
        <div className="bg-gradient-to-b from-white from-75% to-secondary grid place-items-center overflow-y-hidden w-screen h-screen">
            <AnimatePresence initial={false} mode="wait">
                <Switch location={location} key={location}>
                    <Route path="/" component={HomePage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/game" component={GamePage} />
                </Switch>
            </AnimatePresence>
        </div>
    )
}

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)
