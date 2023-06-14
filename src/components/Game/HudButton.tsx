import { useSound } from '@hooks/useSound'
import { Sound } from 'types/Sound'

interface Props {
    icon: string
    className?: string
    color?: 'primary' | 'secondary' | 'success' | 'danger'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onClick?: () => void
}

const colorVariants = {
    primary: 'text-primary-500 border-solid border-2 border-primary-500',
    secondary: 'text-white border-solid border-2 border-white',
    success: 'text-green border-solid border-2 border-green',
    danger: 'text-red-400 border-solid border-2 border-red-400',
}

const sizeVariants = {
    xs: 'py-1 px-2 xs:text-base xl:text-xl rounded-full',
    sm: 'p-4 px-5 xl:p-5 xl:px-6 xs:text-xl xl:text-2xl rounded-2xl',
    md: 'p-6 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
    lg: 'p-8 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
    xl: 'p-10 xl:p-8 xs:text-xl xl:text-3xl rounded-2xl',
}

export const HudButton: React.FC<Props> = ({ icon, color, size, className, onClick }) => {
    const [playDown] = useSound(Sound.PopDown)
    const [playUp] = useSound(Sound.PopUpOn)

    return (
        <button
            type="button"
            className={`active:text-dark active:border-dark
            ${colorVariants[color!]} ${sizeVariants[size!]} ${className}`}
            onClick={onClick}
            onMouseDown={() => playDown()}
            onMouseUp={() => playUp()}
        >
            <i className={icon + ' translate-y-[0.1rem]'} />
        </button>
    )
}

HudButton.defaultProps = {
    color: 'primary',
    size: 'md',
    className: '',
}
