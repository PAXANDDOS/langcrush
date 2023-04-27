import { motion as m } from 'framer-motion'

interface Props {
    name: string
    onClick: (block: string, currentTarget: EventTarget & HTMLButtonElement) => void
}

const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export const GameBlock: React.FC<Props> = ({ name, onClick }) => {
    return (
        <m.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
            initial={{ y: '25%', opacity: 0, rotate: 180 }}
            animate={{
                y: 0,
                opacity: 1,
                rotate: 180,
                transition: { type: 'spring', damping: 10 },
            }}
            exit={{ y: '50%', opacity: 0, transition: { duration: 0.3 } }}
            transition={{
                duration: 0.2,
            }}
            variants={item}
            type="button"
            className="px-5 py-2 bg-primary-500 border-4 border-white font-bold text-2xl text-white rounded-2xl"
            onClick={({ currentTarget }) => onClick(name, currentTarget)}
        >
            {name}
        </m.button>
    )
}
