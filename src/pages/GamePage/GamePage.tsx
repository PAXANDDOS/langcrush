import { AnimatePresence, motion as m } from 'framer-motion'
import { useLocation } from 'wouter'
import { useGameStore } from '../../store/game'

import { useEffect, useState } from 'react'
import { GameBlock } from '../../components/Game/GameBlock'
import { GameHeader } from '../../components/Game/GameHeader'
import { MenuModal } from '../../components/Game/MenuModal'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.15,
        },
    },
}

export const GamePage: React.FC = () => {
    const setLocation = useLocation()[1]
    const [gameReady, setGameReady] = useState(false)
    const gameId = useGameStore(state => state.current)
    const setGameId = useGameStore(state => state.setCurrent)
    const [menuOpen, setMenuOpen] = useState(false)
    const [blocks, setBlocks] = useState<string[]>([
        'Абрикос',
        'Банан',
        'Груша',
        'Диня',
        'Журавлина',
        'Інжир',
        'Киві',
        'Лимон',
        'Малина',
        'Нектарин',
    ])

    useEffect(() => {
        if (gameId === null) {
            setLocation('/')
        }
    }, [gameId, setLocation])

    useEffect(() => {
        setTimeout(() => {
            setGameReady(true)
        }, 100)
    }, [])

    const onBlockClick = (name: string, currentTarget: EventTarget & HTMLButtonElement) => {
        currentTarget.classList.replace('border-white', 'border-green')
        currentTarget.classList.add('z-10')
        setTimeout(() => {
            setBlocks(blocks.filter(item => item !== name))
        }, 400)
    }

    const onReload = () => {
        setGameReady(false)
        setTimeout(() => {
            setGameReady(true)
        }, 500)
        setBlocks([
            'Абрикос',
            'Банан',
            'Груша',
            'Диня',
            'Журавлина',
            'Інжир',
            'Киві',
            'Лимон',
            'Малина',
            'Нектарин',
        ])
    }

    return (
        <>
            <AnimatePresence initial={true}>
                {gameReady || (
                    <m.div
                        className="bg-primary-500 w-screen h-screen absolute z-50 top-0 left-0 grid place-content-center font-bold text-2xl text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Зачекай...
                    </m.div>
                )}
            </AnimatePresence>
            {gameReady && (
                <main className="flex flex-col gap-5 w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4">
                    <GameHeader
                        lives={3}
                        category="ФРУКТИ"
                        onMenu={() => {
                            setMenuOpen(true)
                        }}
                        onReload={onReload}
                    />
                    <div className="w-full h-full bg-white shadow-soft rounded-2xl flex flex-col rotate-180">
                        <m.div
                            className="w-full h-fit flex flex-row flex-wrap"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <AnimatePresence mode="sync">
                                {blocks.map(name => (
                                    <GameBlock key={name} name={name} onClick={onBlockClick} />
                                ))}
                            </AnimatePresence>
                        </m.div>
                    </div>
                    <div className="w-full h-40 flex justify-center items-center">
                        <div className="px-5 py-3 bg-primary-500 border-4 border-secondary font-bold text-2xl text-white rounded-2xl shadow-flat">
                            PEACH
                        </div>
                    </div>
                </main>
            )}
            <AnimatePresence>
                {menuOpen && <MenuModal title={'ФРУКТИ'} handleClose={() => setMenuOpen(false)} />}
            </AnimatePresence>
        </>
    )
}
