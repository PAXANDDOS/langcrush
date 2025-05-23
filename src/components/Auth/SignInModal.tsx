import { AnimatePresence } from 'framer-motion'
import { useReducer } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { ModalLoading } from '@components/Loading/ModalLoding'
import { Modal } from '@components/Modal/Modal'
import { AUTH_LOGIN } from '@constants/api'
import { http } from '@helpers/http'
import { randomEnumValue } from '@helpers/randomEnumValue'
import { SIGNIN_ACTION, SIGNIN_INITIAL_STATE, signInReducer } from '@reducers/signInReducer'
import { AuthState, useAuthStore } from '@store/auth'
import { Avatar } from 'types/Avatar'
import { HomeModals, ModalProps } from 'types/Modal'

interface Props extends ModalProps {
    handleSwitch: (name: HomeModals) => void
}

export const SignInModal: React.FC<Props> = ({ open, onClose, handleSwitch }) => {
    const { t } = useTranslation('home')
    const signIn = useAuthStore(state => state.signIn)
    const [state, dispatch] = useReducer(signInReducer, SIGNIN_INITIAL_STATE)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: SIGNIN_ACTION.SET_FIELD, payload: e.currentTarget })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: SIGNIN_ACTION.FETCH_START })

        // const { status, data } = await http<AuthState>('post', AUTH_LOGIN)

        // if (!status || !data) {
        //     dispatch({ type: SIGNIN_ACTION.FETCH_ERROR, payload: data })
        //     return
        // }

        const data = {
            token: 'as',
            name: 'Павло Літовка',
            email: 'Pavlo.Litovka@cit.khpi.edu.ua',
            avatar: randomEnumValue(Avatar)
        }

        await new Promise(resolve => setTimeout(resolve, 2000))

        signIn(data.token, {
            ...data,
            avatar: randomEnumValue(Avatar),
        })

        dispatch({ type: SIGNIN_ACTION.FETCH_SUCCESS })
        handleSwitch(HomeModals.User)
    }

    return (
        <Modal open={open} title={t('auth.signin')} onClose={onClose}>
            <AnimatePresence>{state.loading && <ModalLoading />}</AnimatePresence>
            <form className="flex flex-col gap-4 pt-4" onSubmit={handleSubmit}>
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
                {state.error && (
                    <span className="text-sm text-red-400 -my-1 text-center">{state.error}</span>
                )}
                <button
                    className="text-sm font-medium text-secondary hover:underline"
                    onClick={() => handleSwitch(HomeModals.Reset)}
                >
                    {t('auth.password.forgot')}
                </button>
                <InputSubmit title={t('auth.signin')} />
                <p className="text-sm font-secondary text-gray-300">
                    {t('auth.noaccount') + ' '}
                    <button
                        className="font-medium text-secondary hover:underline"
                        onClick={() => handleSwitch(HomeModals.Signup)}
                    >
                        {t('auth.signup')}
                    </button>
                </p>
            </form>
        </Modal>
    )
}
