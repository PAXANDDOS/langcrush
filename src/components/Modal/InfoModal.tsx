import { useTranslation } from 'react-i18next'
import type { ModalProps } from 'types/Modal'
import { Modal } from './Modal'

export const InfoModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')
    return (
        <Modal open={open} title={t('info.title')} onClose={onClose}>
            s
        </Modal>
    )
}
