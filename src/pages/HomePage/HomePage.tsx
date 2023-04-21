import { motion as m } from 'framer-motion'
import { useLocation } from 'wouter'

import { Button } from '../../components/Common/Button'
import { IconButton } from '../../components/Common/IconButton'

export const HomePage: React.FC = () => {
    const [location, setLocation] = useLocation()

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen xs:px-4 md:w-3/5 xl:w-1/4 bg-red-300">
            <m.h1
                className="text-6xl font-black font-rubik text-blue mb-6"
                initial={{ y: '20%', opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', damping: 10 },
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.25,
                }}
            >
                LANG<span className="text-red">DICE</span>
            </m.h1>
            <div className="grid grid-cols-4 gap-4">
                <Button
                    content="ГРАТИ"
                    onClick={() => setLocation('/menu')}
                    className="col-span-4"
                />
                <IconButton
                    icon="fa-solid fa-right-to-bracket"
                    color="secondary"
                    className="col-span-2"
                />
                <IconButton icon="fa-solid fa-circle-info" color="secondary" />
                <IconButton icon="fa-solid fa-gear" color="secondary" />
            </div>
        </main>
    )
}
