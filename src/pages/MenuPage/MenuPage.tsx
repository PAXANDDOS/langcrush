import { motion as m } from 'framer-motion'
import { useLocation } from 'wouter'

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
    const [location, setLocation] = useLocation()

    return (
        <main className="flex flex-col w-full h-screen py-4 xs:px-4 md:w-3/5 xl:w-1/4 bg-blue-200">
            <div className="flex flex-col items-start justify-center  w-full h-full">
                <m.h1
                    className="text-6xl font-black font-rubik text-blue mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    SELECT
                    <br />
                    <span className="text-red">CATEGORY</span>
                </m.h1>
                <m.ul
                    className="grid grid-rows-3 grid-flow-col gap-4 overflow-visible"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {[0, 1, 2, 3].map(index => (
                        <ModeButton
                            name="Fruits"
                            key={index}
                            onClick={() => setLocation('/' + index)}
                        />
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
        </main>
    )
}
