import { useTranslation } from 'react-i18next'

import { Modal } from '@components/Modal/Modal'

interface Props {
    handleClose: () => void
}

export const UserModal: React.FC<Props> = ({ handleClose }) => {
    const { t } = useTranslation('auth')

    return (
        <Modal title={t('profile')} handleClose={handleClose}>
            s
        </Modal>
    )
}
