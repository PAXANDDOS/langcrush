import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'
import type { HomeModal } from 'types/Home'

interface Props {
    handleClose: () => void
    handleSwitch: (name: HomeModal) => void
}

export const SignInModal: React.FC<Props> = ({ handleClose, handleSwitch }) => {
    const { t } = useTranslation('auth')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Modal title={t('signin')} handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('email.title')}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="name@game.com"
                    required
                />
                <Input
                    title={t('password.title')}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <button
                    className="text-sm font-medium text-secondary hover:underline"
                    onClick={() => handleSwitch('reset')}
                >
                    {t('password.forgot')}
                </button>
                <InputSubmit title={t('signin')} />
                <p className="text-sm font-secondary text-gray-300">
                    {t('noaccount') + ' '}
                    <button
                        className="font-medium text-secondary hover:underline"
                        onClick={() => handleSwitch('signup')}
                    >
                        {t('signup')}
                    </button>
                </p>
            </form>
        </Modal>
    )
}
