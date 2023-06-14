export interface ModalProps {
    open: boolean
    onClose: () => void
}

export enum HomeModals {
    Settings = 'settings',
    Info = 'info',
    User = 'user',
    Signin = 'signin',
    Signup = 'signup',
    Reset = 'reset',
}
