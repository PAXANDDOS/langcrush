import { motion as m } from 'framer-motion'

interface Props {
    name: 'music' | 'sfx' | 'vibration'
    icon: string
    onClick: (name: 'music' | 'sfx' | 'vibration') => void
    disabled?: boolean
}

export const SwitchButton: React.FC<Props> = ({ name, icon, disabled, onClick }) => {
    return (
        <m.button
            whileHover={{ y: -2 }}
            whileTap={{
                y: 4,
                boxShadow: 'inset 0px -2px rgba(0,0,0,0.3)',
                transition: { type: 'keyframes' },
            }}
            initial={{ y: '15%', opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    damping: 15,
                    stiffness: 150,
                    mass: 0.2,
                    delay: 0.2,
                },
            }}
            transition={{ duration: 0.1 }}
            type="button"
            className="text-2xl bg-green px-4 py-1 rounded-3xl shadow-block active:shadow-button-active border-2 border-shadow aria-disabled:bg-red-500"
            aria-disabled={disabled}
            onClick={() => onClick(name)}
        >
            <i className={icon}></i>
        </m.button>
    )
}
