import { HudButton } from './HudButton'

interface Props {
    lives: number
    category: string
    onMenu: () => void
    onReload: () => void
}

export const GameHeader: React.FC<Props> = ({ lives, category, onMenu, onReload }) => {
    return (
        <div className="w-full grid grid-cols-6 place-items-center gap-1 bg-primary-500 rounded-3xl shadow-flat border-4 border-secondary px-4 py-3">
            <div className="text-center font-medium text-white">
                <h4 className="text-xs text-secondary leading-3">ЖИТТЯ</h4>
                <p className="text-2xl leading-5">{lives}</p>
            </div>
            <h3 className="col-span-3 font-bold text-white">{category}</h3>
            <HudButton
                icon="fa-solid fa-rotate-right"
                color="secondary"
                size="xs"
                onClick={onReload}
            />
            <HudButton icon="fa-solid fa-gear" color="secondary" size="xs" onClick={onMenu} />
        </div>
    )
}
