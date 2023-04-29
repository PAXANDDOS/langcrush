import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'

interface Props {
    handleClose: () => void
}

export const PasswordResetModal: React.FC<Props> = ({ handleClose }) => {
    const { t } = useTranslation('auth')
    const [email, setEmail] = useState('')

    return (
        <Modal title={t('password.reset')} handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('email.title')}
                    name="email"
                    value={email}
                    type="email"
                    placeholder="name@game.com"
                    required
                />
                <InputSubmit title={t('password.reset')} />
            </form>
        </Modal>
    )
}
