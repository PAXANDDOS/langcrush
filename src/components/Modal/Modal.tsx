import { motion as m } from 'framer-motion'

import { Backdrop } from '@components/Backdrop/Backdrop'
import { useSound } from '@hooks/useSound'
import type { ModalProps } from 'types/Modal'
import { Sound } from 'types/Sound'

interface Props extends ModalProps {
    title: string
    children: React.ReactNode
}

const dropIn = {
    hidden: {
        y: '100%',
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.2,
            type: 'spring',
            damping: 4,
            mass: 0.2,
            stiffness: 110,
        },
    },
    exit: {
        opacity: 0,
        scale: [1.05, 0.3],
        transition: {
            duration: 0.3,
            type: 'spring',
        },
    },
}

export const Modal: React.FC<Props> = ({ open, title, children, onClose }) => {
    const [playDown] = useSound(Sound.PopUpOff)
    const [playUp] = useSound(Sound.PopDown)

    if (!open) return null

    return (
        <Backdrop
            onClick={() => {
                playDown()
                onClose()
            }}
        >
            <m.div
                onClick={e => e.stopPropagation()}
                className="w-full md:w-3/5 xl:w-1/4 content px-4 py-6 border-14 border-primary-500 text-white bg-gradient-to-b from-primary-450 to-primary-300 rounded-3xl flex flex-col"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="-translate-y-14 z-20">
                    <h2 className="absolute top-0 left-1/2 -translate-x-1/2 min-w-2/3 px-3 bg-gradient-to-b from-pink-500 to-pink-300 rounded-xl font-extrabold tracking-wide text-xl text-white py-3 text-center shadow-block">
                        {title.toUpperCase()}
                    </h2>
                    <button
                        type="button"
                        className="absolute top-0 right-0 translate-x-9 translate-y-3 text-2xl leading-3 text-red-300 bg-white rounded-full border-8 border-primary-500"
                        onClick={onClose}
                        onMouseDown={() => playUp()}
                        onMouseUp={() => playDown()}
                    >
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                </div>
                {children}
            </m.div>
        </Backdrop>
    )
}
