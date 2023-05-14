import { motion as m } from 'framer-motion'

import { useSound } from '@hooks/useSound'
import type { Preference } from 'types/Preferences'
import { Sound } from 'types/Sound'

interface Props {
    name: Preference
    icon: string
    onClick: (name: Preference) => void
    disabled?: boolean
}

export const SwitchButton: React.FC<Props> = ({ name, icon, disabled, onClick }) => {
    const [playDown] = useSound(Sound.PopDown)
    const [playUp] = useSound(Sound.PopUp)

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
            onMouseDown={() => playDown()}
            onMouseUp={() => playUp()}
        >
            <i className={icon}></i>
        </m.button>
    )
}
