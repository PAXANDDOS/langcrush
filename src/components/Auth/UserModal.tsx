import { useTranslation } from 'react-i18next'

import { Modal } from '@components/Modal/Modal'
import { ModalProps } from 'types/Modal'

export const UserModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')

    return (
        <Modal open={open} title={t('auth.profile')} onClose={onClose}>
            s
        </Modal>
    )
}
