import { AnimatePresence, motion as m } from 'framer-motion'
import { useLocation } from 'wouter'
import { useGameStore } from '../../store/game'

import { useEffect, useState } from 'react'
import { HudButton } from '../../components/Common/HudButton'

export const GamePage: React.FC = () => {
    const setLocation = useLocation()[1]
    const [gameReady, setGameReady] = useState(false)
    const gameId = useGameStore(state => state.current)
    const setGameId = useGameStore(state => state.setCurrent)

    useEffect(() => {
        if (gameId === null) {
            setLocation('/')
        }
    }, [gameId, setLocation])

    useEffect(() => {
        setTimeout(() => {
            setGameReady(true)
        }, 2000)
    }, [])

    return (
        <>
            <AnimatePresence initial={true}>
                {gameReady || (
                    <m.div
                        className="bg-primary w-screen h-screen absolute z-50 top-0 left-0 grid place-content-center font-rubik font-bold text-2xl text-white"
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
                    <div className="w-full grid grid-cols-6 place-items-center gap-1 bg-primary rounded-3xl shadow-flat border-4 border-secondary px-4 py-3">
                        <div className="text-center font-rubik font-medium text-white">
                            <h4 className="text-xs text-secondary leading-3">ЖИТТЯ</h4>
                            <p className="text-2xl leading-5">3</p>
                        </div>
                        <h3 className="col-span-3 font-rubik font-bold text-white">ФРУКТИ</h3>
                        <HudButton
                            icon="fa-solid fa-house"
                            color="secondary"
                            size="xs"
                            onClick={() => {
                                setGameId(null)
                                setLocation('/')
                            }}
                        />
                        <HudButton
                            icon="fa-solid fa-rotate-right"
                            color="secondary"
                            size="xs"
                            onClick={() => {
                                setLocation('/game')
                            }}
                        />
                    </div>
                    <div className="w-full h-full bg-white shadow-soft rounded-2xl flex flex-col rotate-180">
                        <div className="w-full h-fit flex flex-row flex-wrap justify-end">
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Абрикос
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Банан
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Груша
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Диня
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Журавлина
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Інжир
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Киві
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Лимон
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Малина
                            </div>
                            <div className="rotate-180 px-4 py-2 bg-primary border-4 border-secondary font-rubik font-bold text-xl text-white rounded-2xl">
                                Нектарин
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-40 flex justify-center items-center">
                        <div className="px-5 py-3 bg-primary border-4 border-secondary font-rubik font-bold text-2xl text-white rounded-2xl shadow-flat">
                            PEACH
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}
