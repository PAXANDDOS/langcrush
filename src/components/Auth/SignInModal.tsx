import { useState } from 'react'
import { Input } from '../Common/Input'
import { InputSubmit } from '../Common/InputSubmit'
import { Modal } from '../Modal/Modal'

interface Props {
    handleClose: () => void
    handleSwitch: (name: 'settings' | 'user' | 'info' | 'signin' | 'signup' | 'reset') => void
}

export const SignInModal: React.FC<Props> = ({ handleClose, handleSwitch }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Modal title="SIGN IN" handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title="Your email"
                    name="email"
                    value={email}
                    type="email"
                    placeholder="name@game.com"
                    required
                />
                <Input
                    title="Password"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <button
                    className="text-sm font-medium text-light hover:underline"
                    onClick={() => handleSwitch('reset')}
                >
                    Forgot password?
                </button>
                <InputSubmit title="Sign in" />
                <p className="text-sm font-light text-gray-300">
                    Dont have an account yet?{' '}
                    <button
                        className="font-medium text-light hover:underline"
                        onClick={() => handleSwitch('signup')}
                    >
                        Sign up
                    </button>
                </p>
            </form>
        </Modal>
    )
}
