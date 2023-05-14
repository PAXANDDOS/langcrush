import { motion as m } from 'framer-motion'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'wouter'

import { IconButton } from '@components/Common/IconButton'
import { Loading } from '@components/Loading/Loading'
import { ModeButton } from '@components/Menu/ModeButton'
import { useCategories } from '@hooks/useCategories'
import { useGameStore } from '@store/game'
import { shallow } from 'zustand/shallow'

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
    const { t } = useTranslation('menu')
    const setLocation = useLocation()[1]
    const { data, isLoading, error } = useCategories()
    const [modeId, startGame] = useGameStore(state => [state.modeId, state.startGame], shallow)

    useEffect(() => {
        if (modeId !== 0) {
            setLocation(`/game`)
        }
    }, [modeId, setLocation])

    if (isLoading) return <Loading />
    if (error) return <Loading message={error} />

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
                {t('title.1').toUpperCase()}{' '}
                <span className="text-red-400">{t('title.2').toUpperCase()}</span>
            </m.h1>
            <m.ul
                className="w-full h-full flex flex-col gap-4 overflow-y-auto row-span-6 no-scrollbar"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {data.map(category => (
                    <ModeButton
                        key={category.id}
                        name={category.name}
                        description={category.description}
                        score={category.score}
                        onClick={() => startGame(category.id, category.name, category.score || 0)}
                    />
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
