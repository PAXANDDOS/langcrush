import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { ModalLoading } from '@components/Loading/ModalLoding'
import { Modal } from '@components/Modal/Modal'
import { AUTH_PASSWORD_RESET } from '@constants/api'
import { http } from '@helpers/http'
import { AnimatePresence } from 'framer-motion'
import type { ModalProps } from 'types/Modal'

export const PasswordResetModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    const [email, setEmail] = useState('')
    const [fetch, setFetch] = useState({
        loading: false,
        error: '',
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFetch({ loading: true, error: '' })

        const { status, data } = await http<any>('post', AUTH_PASSWORD_RESET, { email })

        if (!status) {
            setFetch({ loading: false, error: data.toString() })
            return
        }

        setFetch({ loading: false, error: '' })
        onClose()
    }

    return (
        <Modal open={open} title={t('auth.password.reset')} onClose={onClose}>
            <AnimatePresence>{fetch.loading && <ModalLoading />}</AnimatePresence>
            <form className="flex flex-col gap-4 pt-4" onSubmit={handleSubmit}>
                <Input
                    title={t('auth.email.title')}
                    name="email"
                    value={email}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@game.com"
                    required
                />
                <InputSubmit title={t('auth.password.reset')} />
            </form>
        </Modal>
    )
}
