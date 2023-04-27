import { Modal } from '../Modal/Modal'

interface Props {
    handleClose: () => void
}

export const UserModal: React.FC<Props> = ({ handleClose }) => {
    return (
        <Modal title="PROFILE" handleClose={handleClose}>
            s
        </Modal>
    )
}
