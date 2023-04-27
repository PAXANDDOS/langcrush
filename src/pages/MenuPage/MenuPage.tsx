import { motion as m } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useGameStore } from '../../store/game'

import { IconButton } from '../../components/Common/IconButton'
import { ModeButton } from '../../components/Menu/ModeButton'

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
            className="grid grid-rows-8 gap-4 w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4"
            exit={{ filter: 'blur(15px)', opacity: 0, transition: { duration: 0.3 } }}
        >
            <m.h1
                className="w-full text-5xl font-black text-primary-500 mb-6 break-words"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                ОБЕРИ <span className="text-red-400">КАТЕГОРІЮ</span>
            </m.h1>
            <m.ul
                className="w-full h-full flex flex-col gap-4 overflow-y-auto row-span-6 no-scrollbar"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {[0, 1, 2, 3, 4, 5].map(index => (
                    <ModeButton name="Fruits" key={index} onClick={() => setCurrent(index)} />
                ))}
            </m.ul>
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
