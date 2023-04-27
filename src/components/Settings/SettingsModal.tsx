import { shallow } from 'zustand/shallow'
import { usePreferenceStore } from '../../store/preferences'

import { Modal } from '../Modal/Modal'
import { SettingsButton } from './SettingsButton'
import { SwitchButton } from './SwitchButton'

interface Props {
    handleClose: () => void
    handleSwitch: (name: 'settings' | 'user' | 'info' | 'signin' | 'signup') => void
}

export const SettingsModal: React.FC<Props> = ({ handleClose, handleSwitch }) => {
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
        <Modal title="SETTINGS" handleClose={handleClose}>
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
                <SettingsButton content="Connect" onClick={() => handleSwitch('signin')} />
                <SettingsButton content="Credits" onClick={() => handleSwitch('info')} />
                <SettingsButton content="Terms and Privacy" onClick={() => null} />
                <SettingsButton content="Erase data" onClick={() => null} />
            </div>
        </Modal>
    )
}
