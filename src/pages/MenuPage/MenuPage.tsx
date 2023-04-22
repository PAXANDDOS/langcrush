import { motion as m } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useGameStore } from '../../store/game'

import { IconButton } from '../../components/Common/IconButton'
import { ModeButton } from '../../components/Common/ModeButton'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.01,
            staggerChildren: 0.1,
        },
    },
}

export const MenuPage: React.FC = () => {
    const setLocation = useLocation()[1]
    const setCurrent = useGameStore(state => state.setCurrent)
    const currentGame = useGameStore(state => state.current)

    useEffect(() => {
        if (currentGame !== null) {
            setLocation(`/game`)
        }
    }, [currentGame, setLocation])

    return (
        <m.main
            className="flex flex-col w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4"
            exit={{ filter: 'blur(15px)', opacity: 0, transition: { duration: 0.3 } }}
        >
            <div className="flex flex-col items-start justify-center w-full h-full">
                <m.h1
                    className="text-6xl font-black font-rubik text-primary mb-6 w-full break-words"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    ОБЕРИ <span className="text-red">КАТЕГОРІЮ</span>
                </m.h1>
                <m.ul
                    className="grid grid-rows-3 grid-flow-col gap-4 overflow-visible"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {[0, 1, 2, 3].map(index => (
                        <ModeButton name="Fruits" key={index} onClick={() => setCurrent(index)} />
                    ))}
                </m.ul>
            </div>
            <div>
                <IconButton
                    icon="fa-solid fa-left"
                    color="secondary"
                    size="sm"
                    onClick={() => setLocation('/')}
                />
            </div>
        </m.main>
    )
}
