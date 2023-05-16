import { useReducer } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@components/Common/Input'
import { InputSubmit } from '@components/Common/InputSubmit'
import { Modal } from '@components/Modal/Modal'
import { HomeModals, ModalProps } from 'types/Modal'

interface Props extends ModalProps {
    handleSwitch: (name: HomeModals) => void
}

interface State {
    email: string
    password: string
}

type Action = {
    type: 'setEmail' | 'setPassword'
    payload: string
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setEmail':
            return { ...state, email: action.payload.slice(0, 32) }
        case 'setPassword':
            return { ...state, password: action.payload.slice(0, 64) }
        default:
            return state
    }
}

export const SignInModal: React.FC<Props> = ({ open, onClose, handleSwitch }) => {
    const { t } = useTranslation('home')
    const [state, dispatch] = useReducer(reducer, { email: '', password: '' })

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'setEmail', payload: event.target.value })
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'setPassword', payload: event.target.value })
    }

    return (
        <Modal open={open} title={t('auth.signin')} onClose={onClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title={t('auth.email.title')}
                    name="email"
                    value={state.email}
                    type="email"
                    placeholder="name@game.com"
                    onChange={handleEmailChange}
                    required
                />
                <Input
                    title={t('auth.password.title')}
                    name="password"
                    value={state.password}
                    type="password"
                    placeholder="••••••••"
                    onChange={handlePasswordChange}
                    required
                />
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
