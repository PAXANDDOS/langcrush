import { AnimatePresence, motion as m } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'wouter'

import { PasswordResetModal } from '@components/Auth/PasswordResetModal'
import { SignInModal } from '@components/Auth/SignInModal'
import { SignUpModal } from '@components/Auth/SignUpModal'
import { UserModal } from '@components/Auth/UserModal'
import { Button } from '@components/Common/Button'
import { IconButton } from '@components/Common/IconButton'
import { InfoModal } from '@components/Modal/InfoModal'
import { SettingsModal } from '@components/Settings/SettingsModal'
import { HomeModals } from 'types/Modal'

const modalsInitial = {
    settings: false,
    info: false,
    user: false,
    signin: false,
    signup: false,
    reset: false,
}

export const HomePage: React.FC = () => {
    const { t } = useTranslation('home')
    const setLocation = useLocation()[1]
    const [modals, setModals] = useState(modalsInitial)

    const handleModalSwitch = (modal?: HomeModals) => {
        setModals(modalsInitial)
        modal && setModals(prevState => ({ ...prevState, [modal]: !prevState[modal] }))
    }

    return (
        <main className="flex flex-col items-center justify-center w-full h-screen xs:px-4 md:w-3/5 xl:w-1/4">
            <m.h1
                className="text-5xl xl:text-6xl font-black text-primary-500 mb-7"
                initial={{ y: '20%', opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { type: 'spring', damping: 10 },
                }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.25,
                }}
            >
                LANG<span className="text-red-400">CRUSH</span>
            </m.h1>
            <div className="grid grid-cols-4 gap-4">
                <Button
                    content={t('play').toUpperCase()}
                    onClick={() => setLocation('/menu')}
                    className="col-span-4"
                />
                <IconButton
                    icon="fa-solid fa-right-to-bracket"
                    color="secondary"
                    className="col-span-2"
                    onClick={() => handleModalSwitch(HomeModals.Signin)}
                />
                <IconButton
                    icon="fa-solid fa-circle-info"
                    color="secondary"
                    onClick={() => handleModalSwitch(HomeModals.Info)}
                />
                <IconButton
                    icon="fa-solid fa-gear"
                    color="secondary"
                    onClick={() => handleModalSwitch(HomeModals.Settings)}
                />
            </div>
            <AnimatePresence initial={false} mode="wait">
                {modals.settings && (
                    <SettingsModal
                        open={modals.settings}
                        onClose={() => handleModalSwitch()}
                        handleSwitch={handleModalSwitch}
                    />
                )}
                {modals.info && (
                    <InfoModal open={modals.info} onClose={() => handleModalSwitch()} />
                )}
                {modals.signin && (
                    <SignInModal
                        open={modals.signin}
                        onClose={() => handleModalSwitch()}
                        handleSwitch={handleModalSwitch}
                    />
                )}
                {modals.signup && (
                    <SignUpModal open={modals.signup} onClose={() => handleModalSwitch()} />
                )}
                {modals.user && (
                    <UserModal open={modals.user} onClose={() => handleModalSwitch()} />
                )}
                {modals.reset && (
                    <PasswordResetModal open={modals.reset} onClose={() => handleModalSwitch()} />
                )}
            </AnimatePresence>
        </main>
    )
}
