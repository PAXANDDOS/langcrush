import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'
import type { ModalProps } from 'types/Modal'

export const SignUpModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    return (
        <Modal open={open} title={t('auth.signup')} onClose={onClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('auth.name.title')}
                    name="name"
                    value={name}
                    placeholder={t('auth.name.placeholder')!}
                    required
                />
                <Input
                    title={t('auth.email.title')}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="name@game.com"
                    required
                />
                <Input
                    title={t('auth.password.title')}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <Input
                    title={t('auth.password.repeat')}
                    name="password2"
                    value={password2}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <InputSubmit title={t('auth.signup')} />
            </form>
        </Modal>
    )
}
