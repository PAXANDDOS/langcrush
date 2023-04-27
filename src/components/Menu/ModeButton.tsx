import { motion as m } from 'framer-motion'

interface Props {
    name: string
    onClick?: () => void
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export const ModeButton: React.FC<Props> = ({ name, onClick }) => {
    return (
        <m.button
            variants={item}
            whileHover={{ y: -2 }}
            whileTap={{ y: 4, boxShadow: 'inset 0px -2px rgba(0,0,0,0.3)' }}
            className="flex flex-col px-8 py-10 xl:p-8 active:translate-y-1
            bg-gradient-to-r from-primary-500 to-primary-400
            tracking-wide font-bold xs:text-2xl xl:text-3xl text-white active:text-dark
            shadow-button border-2 border-shadow rounded-2xl
            bg-primary-500 active:bg-green relative overflow-x-clip"
            onClick={onClick}
        >
            {name}
            <br />
            <span className="text-xs font-thin">536 points</span>
            <i className="fa-solid fa-apple-whole absolute text-9xl right-0 bottom-0 translate-x-3 translate-y-6 opacity-60 text-shadow"></i>
        </m.button>
    )
}
