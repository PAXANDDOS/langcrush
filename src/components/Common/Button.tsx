import classNames from 'classnames'

interface ButtonProps {
    content: string | React.ReactNode
    full?: boolean
    textSize?: string
}

export const Button: React.FC<ButtonProps> = props => {
    return (
        <button
            type="button"
            className={classNames(
                `p-6 active:translate-y-1`,
                `font-rubik font-bold text-${props.textSize} tracking-wide text-white active:text-dark`,
                'shadow-game-button active:shadow-game-button-active',
                'border-2 border-regal-blue-active rounded-2xl',
                'bg-regal-blue active:bg-regal-green',
                { 'w-full': props.full }
            )}
        >
            {props.content}
        </button>
    )
}

Button.defaultProps = {
    full: false,
    textSize: '3xl',
}
