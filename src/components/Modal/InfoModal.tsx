import { Modal } from './Modal'

interface Props {
    handleClose: () => void
}

export const InfoModal: React.FC<Props> = ({ handleClose }) => {
    return (
        <Modal title="INFORMATION" handleClose={handleClose}>
            s
        </Modal>
    )
}
