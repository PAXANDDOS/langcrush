import { motion as m } from 'framer-motion'

interface Props {
    icon: string
    className?: string
    color?: 'primary' | 'secondary' | 'success' | 'danger'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onClick?: () => void
}

const colorVariants = {
    primary: 'text-white active:text-dark-blue bg-primary-500 active:bg-green',
    secondary: 'text-dark-blue active:text-dark bg-secondary active:bg-green',
    success: 'text-white active:text-dark-blue bg-green active:bg-primary-500',
    danger: 'text-white active:text-dark-blue bg-red-400 active:bg-green',
}

const sizeVariants = {
    xs: 'px-2 xl:px-5 xs:text-lg xl:text-xl rounded-xl',
    sm: 'p-4 px-5 xl:p-5 xl:px-6 xs:text-xl xl:text-2xl rounded-2xl',
    md: 'p-6 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
    lg: 'p-8 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
    xl: 'p-10 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
}

export const IconButton: React.FC<Props> = ({ icon, color, size, className, onClick }) => {
    return (
        <m.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 4, boxShadow: 'inset 0px -2px rgba(0,0,0,0.3)' }}
            initial={{ y: '15%', opacity: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                transition: { type: 'spring', damping: 15 },
            }}
            exit={{ y: '15%', opacity: 0 }}
            transition={{
                duration: 0.2,
            }}
            type="button"
            className={`shadow-button border-2 border-shadow
            ${colorVariants[color!]} ${sizeVariants[size!]} ${className}`}
            onClick={onClick}
        >
            <i className={icon} />
        </m.button>
    )
}

IconButton.defaultProps = {
    color: 'primary',
    size: 'md',
    className: '',
}
