import { AnimatePresence } from 'framer-motion'
import { useReducer } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { ModalLoading } from '@components/Loading/ModalLoding'
import { Modal } from '@components/Modal/Modal'
import { AUTH_REGISTER } from '@constants/api'
import { http } from '@helpers/http'
import { SIGNUP_ACTION, SIGNUP_INITIAL_STATE, signUpReducer } from 'reducers/signUpReducer'
import type { ModalProps } from 'types/Modal'

export const SignUpModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    const [state, dispatch] = useReducer(signUpReducer, SIGNUP_INITIAL_STATE)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SIGNUP_ACTION.SET_FIELD, payload: e.currentTarget })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: SIGNUP_ACTION.FETCH_START })

        const { status, data } = await http<any>('post', AUTH_REGISTER)

        if (!status) {
            dispatch({ type: SIGNUP_ACTION.FETCH_ERROR, payload: data })
            return
        }

        dispatch({ type: SIGNUP_ACTION.FETCH_SUCCESS })
        onClose()
    }

    return (
        <Modal open={open} title={t('auth.signup')} onClose={onClose}>
            <AnimatePresence>{state.loading && <ModalLoading />}</AnimatePresence>
            <form className="flex flex-col gap-4 pt-4" onSubmit={handleSubmit}>
                <Input
                    title={t('auth.name.title')}
                    name="name"
                    value={state.name}
                    placeholder={t('auth.name.placeholder')!}
                    onChange={handleChange}
                    required
                />
                <Input
                    title={t('auth.email.title')}
                    name="email"
                    value={state.email}
                    type="email"
                    placeholder="name@game.com"
                    onChange={handleChange}
                    required
                />
                <Input
                    title={t('auth.password.title')}
                    name="password"
                    value={state.password}
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    required
                />
                <Input
                    title={t('auth.password.repeat')}
                    name="password_confirmation"
                    value={state.password_confirmation}
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    required
                />
                <InputSubmit title={t('auth.signup')} />
            </form>
        </Modal>
    )
}
