import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'

interface Props {
    handleClose: () => void
}

export const SignUpModal: React.FC<Props> = ({ handleClose }) => {
    const { t } = useTranslation('auth')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    return (
        <Modal title={t('signup')} handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('name.title')}
                    name="name"
                    value={name}
                    placeholder={t('name.placeholder')!}
                    required
                />
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
                <Input
                    title={t('password.repeat')}
                    name="password2"
                    value={password2}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <InputSubmit title={t('signup')} />
            </form>
        </Modal>
    )
}
