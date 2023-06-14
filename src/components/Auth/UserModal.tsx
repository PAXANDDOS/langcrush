import { useTranslation } from 'react-i18next'

import { IconButton } from '@components/Common/IconButton'
import { Input } from '@components/Common/Input'
import { Modal } from '@components/Modal/Modal'
import { useAuthStore } from '@store/auth'
import { AVATAR_FALLBACK } from 'types/Avatar'
import { ModalProps } from 'types/Modal'

export const UserModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    const [name, email, avatar, signOut] = useAuthStore(state => [
        state.name,
        state.email,
        state.avatar,
        state.signOut,
    ])

    const onSignOut = () => {
        signOut()
        onClose()
    }

    return (
        <Modal open={open} title={t('auth.profile.title')} onClose={onClose}>
            <div className="grid grid-cols-6 grid-rows-user gap-6 xs:gap-2 ">
                <picture className="col-span-2 row-span-2 xs:col-span-6 border-6 border-primary-500 rounded-2xl overflow-hidden grid place-items-center">
                    <source srcSet={avatar} type="image/webp" />
                    <source srcSet={AVATAR_FALLBACK} type="image/jpeg" />
                    <img src={AVATAR_FALLBACK} alt="Default avatar" />
                </picture>
                <div className="col-span-4 xs:col-span-6">
                    <Input title={t('auth.name.title')} value={name} disabled />
                </div>
                <div className="col-span-4 xs:col-span-6">
                    <Input title={t('auth.email.title')} value={email} type="email" disabled />
                </div>
                <IconButton
                    icon={'fa-solid fa-right-from-bracket'}
                    onClick={onSignOut}
                    className="col-span-6 py-3 xs:mt-5"
                    color="danger"
                />
            </div>
        </Modal>
    )
}
