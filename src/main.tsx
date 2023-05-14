import { AnimatePresence } from 'framer-motion'
import { StrictMode, Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Switch, useLocation } from 'wouter'

import * as pages from '@constants/routes'
import { GamePage } from '@pages/GamePage/GamePage'
import { HomePage } from '@pages/HomePage/HomePage'
import { MenuPage } from '@pages/MenuPage/MenuPage'

import { Loading } from '@components/Loading/Loading'
import { useMusic } from '@hooks/useMusic'
import './i18n'
import './index.css'

const App: React.FC = () => {
    const location = useLocation()[0]
    const [audio] = useMusic()

    useEffect(() => {
        console.log(location)
        switch (location) {
            case pages.HOME_PAGE:
                audio?.volume(0.2)
                break
            case pages.MENU_PAGE:
                audio?.volume(0.15)
                break
            case pages.GAME_PAGE:
                audio?.volume(0.1)
                break
        }
    }, [audio, location])

    return (
        <div className="bg-gradient-to-b from-white from-75% to-secondary grid place-items-center overflow-y-hidden w-screen h-screen">
            <AnimatePresence initial={false} mode="wait">
                <Suspense fallback={<Loading />}>
                    <Switch location={location} key={location}>
                        <Route path={pages.HOME_PAGE} component={HomePage} />
                        <Route path={pages.MENU_PAGE} component={MenuPage} />
                        <Route path={pages.GAME_PAGE} component={GamePage} />
                    </Switch>
                </Suspense>
            </AnimatePresence>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
