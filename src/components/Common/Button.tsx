import { motion as m } from 'framer-motion'

interface Props {
    content: string | React.ReactNode
    className?: string
    onClick?: () => void
}

export const Button: React.FC<Props> = ({ className, onClick, content }) => {
    return (
        <m.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 4, boxShadow: 'inset 0px -2px rgba(0,0,0,0.3)' }}
            initial={{ y: '25%', opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: { type: 'spring', damping: 10 },
            }}
            exit={{ y: '15%', opacity: 0 }}
            transition={{
                duration: 0.2,
            }}
            type="button"
            className={`p-6 xl:p-8 w-full
            font-rubik font-bold xs:text-2xl xl:text-4xl tracking-wide text-white active:text-dark
            shadow-button border-2 border-shadow rounded-2xl
            bg-primary active:bg-green ${className}`}
            onClick={onClick}
        >
            {content}
        </m.button>
    )
}

Button.defaultProps = {
    className: '',
}
