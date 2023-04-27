import { shallow } from 'zustand/shallow'
import { usePreferenceStore } from '../../store/preferences'

import { useLocation } from 'wouter'
import { useGameStore } from '../../store/game'
import { Modal } from '../Modal/Modal'
import { SettingsButton } from '../Settings/SettingsButton'
import { SwitchButton } from '../Settings/SwitchButton'

interface Props {
    title: string
    handleClose: () => void
}

export const MenuModal: React.FC<Props> = ({ title, handleClose }) => {
    const setGameId = useGameStore(state => state.setCurrent)
    const setLocation = useLocation()[1]

    const [music, sfx, vibration, setMusic, setSfx, setVibration] = usePreferenceStore(
        state => [
            state.music,
            state.sfx,
            state.vibration,
            state.setMusic,
            state.setSfx,
            state.setVibration,
        ],
        shallow
    )

    return (
        <Modal title={title} handleClose={handleClose}>
            <div className="grid grid-cols-3 gap-3 gap-x-2 px-6 pt-2">
                <SwitchButton
                    name="music"
                    icon={`fa-solid fa-music${!music ? '-slash' : ''}`}
                    onClick={() => setMusic(!music)}
                    disabled={!music}
                />
                <SwitchButton
                    name="sfx"
                    icon={`fa-solid fa-volume${!sfx ? '-slash' : ''}`}
                    onClick={() => setSfx(!sfx)}
                    disabled={!sfx}
                />
                <SwitchButton
                    name="vibration"
                    icon="fa-solid fa-mobile-screen-button"
                    onClick={() => setVibration(!vibration)}
                    disabled={!vibration}
                />
                <SettingsButton
                    content="Exit Level"
                    onClick={() => {
                        setGameId(null)
                        setLocation('/')
                    }}
                />
            </div>
        </Modal>
    )
}
