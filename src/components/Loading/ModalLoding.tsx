import { motion as m } from 'framer-motion'

export const ModalLoading: React.FC = () => {
    return (
        <m.div
            className="bg-primary-500 w-full h-full absolute z-10 top-0 left-0 grid place-content-center font-bold text-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <i className="fa-solid fa-spinner-third fa-spin"></i>
        </m.div>
    )
}
