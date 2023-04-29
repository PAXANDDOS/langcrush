import { useTranslation } from 'react-i18next'
import { Modal } from './Modal'

interface Props {
    handleClose: () => void
}

export const InfoModal: React.FC<Props> = ({ handleClose }) => {
    const { t } = useTranslation('info')
    return (
        <Modal title={t('title')} handleClose={handleClose}>
            s
        </Modal>
    )
}
