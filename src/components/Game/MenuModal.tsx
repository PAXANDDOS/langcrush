import { useTranslation } from 'react-i18next'
import { shallow } from 'zustand/shallow'

import { Modal } from '@components/Modal/Modal'
import { SettingsButton } from '@components/Settings/SettingsButton'
import { SwitchButton } from '@components/Settings/SwitchButton'
import { usePreferenceStore } from '@store/preferences'
import type { ModalProps } from 'types/Modal'

interface Props extends ModalProps {
    title: string
    onExit: () => void
}

export const MenuModal: React.FC<Props> = ({ open, title, onClose, onExit }) => {
    const { t } = useTranslation('game')

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
        <Modal open={open} title={title} onClose={onClose}>
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
                <SettingsButton content={t('exit')} onClick={onExit} />
            </div>
        </Modal>
    )
}
