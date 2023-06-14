import { motion as m } from 'framer-motion'

import { useSound } from '@hooks/useSound'
import { Sound } from 'types/Sound'

interface Props {
    content: string
    onClick: () => void
}

export const SettingsButton: React.FC<Props> = ({ content, onClick }) => {
    const [playDown] = useSound(Sound.PopDown)
    const [playUp] = useSound(Sound.PopUpOn)

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
            className="col-span-3 bg-primary-500 rounded-full py-2 text-lg font-bold shadow-block active:shadow-button-active border-2 border-shadow"
            onClick={onClick}
            onMouseDown={() => playDown()}
            onMouseUp={() => playUp()}
        >
            {content}
        </m.button>
    )
}
