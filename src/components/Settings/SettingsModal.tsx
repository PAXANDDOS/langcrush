import { AnimatePresence, motion as m } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { shallow } from 'zustand/shallow'

import { Modal } from '@components/Modal/Modal'
import { usePreferenceStore } from '@store/preferences'
import { HomeModals } from 'types/Home'
import { SettingsButton } from './SettingsButton'
import { SettingsSelect } from './SettingsSelect'
import { SwitchButton } from './SwitchButton'

interface Props {
    handleClose: () => void
    handleSwitch: (name: HomeModals) => void
}

export const SettingsModal: React.FC<Props> = ({ handleClose, handleSwitch }) => {
    const { t, i18n } = useTranslation(['settings'])
    const [languageOpen, setLanguageOpen] = useState(false)
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

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language)
        setLanguageOpen(false)
    }

    return (
        <Modal title={t('title')} handleClose={handleClose}>
            <div className="grid grid-cols-3 gap-3 gap-x-2 px-6 pt-2 relative">
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
                <SettingsSelect
                    title={t('language')}
                    onClick={() => setLanguageOpen(open => !open)}
                />
                <AnimatePresence initial={false} mode="wait">
                    {languageOpen && (
                        <m.ul
                            initial={{ y: '-15%', opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    damping: 15,
                                    stiffness: 150,
                                    mass: 0.2,
                                },
                            }}
                            exit={{ y: '-15%', opacity: 0 }}
                            className="absolute z-10 mt-28 mx-auto left-0 right-0 w-64 bg-primary-500 text-white rounded-2xl py-2 text-base divide-y divide-shadow font-bold shadow-hud border-2 border-shadow"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <li role="none">
                                <button
                                    className="block px-4 py-3 active:bg-primary-400 w-full h-full"
                                    role="menuitem"
                                    onClick={() => handleLanguageChange('en')}
                                >
                                    English
                                </button>
                            </li>
                            <li role="none">
                                <button
                                    className="block px-4 py-3 active:bg-primary-400 w-full h-full"
                                    role="menuitem"
                                    onClick={() => handleLanguageChange('uk')}
                                >
                                    Українська
                                </button>
                            </li>
                        </m.ul>
                    )}
                </AnimatePresence>
                <SettingsButton
                    content={t('connect')}
                    onClick={() => handleSwitch(HomeModals.Signin)}
                />
                <SettingsButton
                    content={t('credits')}
                    onClick={() => handleSwitch(HomeModals.Info)}
                />
                <SettingsButton content={t('terms')} onClick={() => null} />
                <SettingsButton content={t('erase')} onClick={() => null} />
            </div>
        </Modal>
    )
}
