import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'
import type { ModalProps } from 'types/Modal'

export const PasswordResetModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    const [email, setEmail] = useState('')

    return (
        <Modal open={open} title={t('auth.password.reset')} onClose={onClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('auth.email.title')}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="name@game.com"
                    required
                />
                <InputSubmit title={t('auth.password.reset')} />
            </form>
        </Modal>
    )
}
