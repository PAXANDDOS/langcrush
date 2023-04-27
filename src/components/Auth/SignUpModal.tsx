import { useState } from 'react'
import { Input } from '../Common/Input'
import { InputSubmit } from '../Common/InputSubmit'
import { Modal } from '../Modal/Modal'

interface Props {
    handleClose: () => void
}

export const SignUpModal: React.FC<Props> = ({ handleClose }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    return (
        <Modal title="SIGN UP" handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <Input
                    title="Your name"
                    name="name"
                    value={name}
                    placeholder="Best Player"
                    required
                />
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
                <Input
                    title="Repeat password"
                    name="password2"
                    value={password2}
                    type="password"
                    placeholder="••••••••"
                    required
                />
                <InputSubmit title="Sign up" />
            </form>
        </Modal>
    )
}
