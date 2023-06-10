import { AnimatePresence, motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

import { DefeatModal } from '@components/Game/DefeatModal'
import { GameBlock } from '@components/Game/GameBlock'
import { GameHeader } from '@components/Game/GameHeader'
import { MenuModal } from '@components/Game/MenuModal'
import { VictoryModal } from '@components/Game/VictoryModal'
import { Loading } from '@components/Loading/Loading'
import { http } from '@helpers/http'
import { useSound } from '@hooks/useSound'
import { useGameStore } from '@store/game'
import { Sound } from 'types/Sound'
import type { Word } from 'types/Word'
import { shallow } from 'zustand/shallow'

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
    const [errorMsg, setErrorMsg] = useState<string>()

    const [modeId, modeName, points, endGame] = useGameStore(
        state => [state.modeId, state.modeName, state.score, state.endGame],
        shallow
    )
    const [playSuccess] = useSound(Sound.PopX)
    const [playFail] = useSound(Sound.Bing)
    const [crackPlaybackRate, setCrackPlaybackRate] = useState(0.45)
    const [playCrack] = useSound(Sound.Crack, {
        playbackRate: crackPlaybackRate,
    })

    const [menuOpen, setMenuOpen] = useState(false)
    const [gameReady, setGameReady] = useState(false)
    const [turnReady, setTurnReady] = useState(false)
    const [lives, setLives] = useState(3)
    const [blocks, setBlocks] = useState<Word[]>()
    const [currentWord, setCurrentWord] = useState<Word>()
    const [score, setScore] = useState(0)

    const [defeat, setDefeat] = useState(false)
    const [victory, setVictory] = useState(false)

    useEffect(() => {
        if (modeId === 0) setLocation('/')
    }, [modeId, setLocation])

    useEffect(() => {
        if (points !== 0) setScore(points)
    }, [modeId, setLocation])

    useEffect(() => {
        const bootGame = async () => {
            const { status, data } = await http<Word[]>('get', `/categories/${modeId}/words`)

            if (!status) {
                setErrorMsg(data?.toString())
                return
            }

            setBlocks(data)
            setCurrentWord(data![Math.floor(Math.random() * data!.length)])

            setGameReady(true)
            setTurnReady(true)
        }
        bootGame()
    }, [])

    const onBlockClick = (name: string, currentTarget: EventTarget & HTMLButtonElement) => {
        if (!turnReady) return
        setTurnReady(false)
        currentTarget.classList.add('z-50')

        if (name === currentWord?.name) {
            currentTarget.classList.replace('border-white', 'border-green')
            playSuccess()
            playCrack()
            const newBlocks = blocks?.filter(item => item.name !== name)!
            setScore(s => s + name.length)

            if (newBlocks?.length === 0) {
                setVictory(true)
            }

            setBlocks(newBlocks)
            setCurrentWord(newBlocks[Math.floor(Math.random() * newBlocks.length)])
        } else {
            currentTarget.classList.replace('border-white', 'border-red-400')
            currentTarget.classList.add('animate-wiggle')
            playFail()
            setTimeout(() => {
                currentTarget.classList.replace('border-red-400', 'border-white')
                currentTarget.classList.remove('animate-wiggle')
            }, 700)

            const newLives = lives - 1
            if (newLives === 0) {
                setDefeat(true)
            }
            setLives(newLives)
        }
        if (blocks?.length === 0) {
            setScore(prevState => prevState + 1)
        }

        // Set random playback rate in range
        setCrackPlaybackRate(Math.random() * (0.7 - 0.35) + 0.35)

        setTimeout(() => {
            currentTarget.classList.remove('z-50')
            setTurnReady(true)
        }, 700)
    }

    const onRestart = () => {
        const reloadGame = async () => {
            setTurnReady(false)
            setGameReady(false)

            const { status, data } = await http<Word[]>('get', `/categories/${modeId}/words`)

            if (!status) {
                setErrorMsg(data?.toString())
                return
            }

            setBlocks(data)
            setCurrentWord(data![Math.floor(Math.random() * data!.length)])

            setLives(3)
            setScore(0)

            setDefeat(false)
            setVictory(false)
            setMenuOpen(false)

            setGameReady(true)
            setTurnReady(true)
        }
        reloadGame()
    }

    const onExit = () => {
        endGame()
        setLocation('/')
    }

    return (
        <>
            <AnimatePresence initial={true} mode="wait">
                {gameReady || <Loading message={errorMsg} />}
            </AnimatePresence>
            {gameReady && (
                <main className="flex flex-col gap-5 w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4">
                    <GameHeader
                        lives={lives}
                        category={modeName}
                        onMenu={() => {
                            setMenuOpen(true)
                        }}
                        onReload={onRestart}
                    />
                    <div className="w-full h-full bg-white shadow-soft rounded-2xl flex flex-col rotate-180 relative overflow-hidden">
                        <m.div
                            className="w-full h-fit flex flex-row flex-wrap"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <AnimatePresence initial={true} mode="sync">
                                {blocks!.map(block => (
                                    <GameBlock
                                        key={block.id}
                                        name={block.name}
                                        onClick={onBlockClick}
                                    />
                                ))}
                            </AnimatePresence>
                            <h2 className="absolute bottom-0 left-0 rotate-180 bg-gradient-to-b from-[#869af57e] to-transparent w-full text-center py-4 font-semibold text-primary-400 text-xl">
                                {score}
                            </h2>
                        </m.div>
                    </div>
                    <div className="w-full h-40 flex justify-center items-center">
                        <m.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', duration: 0.5, delay: 0.7 }}
                            className="px-5 py-3 bg-primary-500 border-4 border-secondary font-bold text-2xl text-white rounded-2xl shadow-flat"
                        >
                            {currentWord?.translation}
                        </m.div>
                    </div>
                </main>
            )}
            <AnimatePresence initial={false} mode="wait">
                {menuOpen && (
                    <MenuModal
                        open={menuOpen}
                        title={modeName}
                        onExit={onExit}
                        onClose={() => setMenuOpen(false)}
                    />
                )}
                {defeat && (
                    <DefeatModal
                        open={defeat}
                        score={score}
                        onRestart={onRestart}
                        onClose={onExit}
                    />
                )}
                {victory && (
                    <VictoryModal
                        open={victory}
                        score={score}
                        onRestart={onRestart}
                        onClose={onExit}
                    />
                )}
            </AnimatePresence>
        </>
    )
}
