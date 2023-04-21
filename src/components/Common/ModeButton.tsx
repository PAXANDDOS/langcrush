import { motion as m } from 'framer-motion'

interface Props {
    name: string
    className?: string
    onClick?: () => void
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export const ModeButton: React.FC<Props> = ({ className, name, onClick }) => {
    return (
        <m.button
            variants={item}
            whileHover={{ y: -2 }}
            whileTap={{ y: 4, boxShadow: 'inset 0px -2px rgba(0,0,0,0.3)' }}
            className={`px-8 py-7 xl:p-8 active:translate-y-1
            font-rubik tracking-wide text-center font-bold xs:text-xl xl:text-3xl text-white active:text-dark
            shadow-game-button border-2 border-shadow rounded-2xl
            bg-blue active:bg-green ${className}`}
            onClick={onClick}
        >
            {name}
            <br />
            <span className="text-xs font-thin">536 points</span>
        </m.button>
    )
}
