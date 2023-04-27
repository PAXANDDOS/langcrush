import { Modal } from '../Modal/Modal'

interface Props {
    handleClose: () => void
}

export const PasswordResetModal: React.FC<Props> = ({ handleClose }) => {
    return (
        <Modal title="RESET PASSWORD" handleClose={handleClose}>
            <form className="flex flex-col gap-4 pt-4">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                        Your email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="text-white bg-primary-500 placeholder-gray-200 shadow-block border border-shadow rounded-xl block w-full p-2.5 outline-none focus:shadow-button-active"
                        placeholder="name@game.com"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="mt-5 w-full text-white bg-primary-500 hover:bg-primary-700 font-medium rounded-xl text-lg px-5 py-3 text-center shadow-button border border-shadow active:shadow-button-active"
                >
                    Reset password
                </button>
            </form>
        </Modal>
    )
}
