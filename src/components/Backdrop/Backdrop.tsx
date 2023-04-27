import { motion as m } from 'framer-motion'

interface Props {
    children?: React.ReactNode
    onClick?: () => void
}

export const Backdrop: React.FC<Props> = ({ children, onClick }) => {
    return (
        <m.div
            className="absolute top-0 left-0 w-screen h-screen bg-shadow grid place-items-center overflow-hidden p-5"
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </m.div>
    )
}
