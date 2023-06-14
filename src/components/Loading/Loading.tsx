import { motion as m } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface Props {
    message?: string
}

export const Loading: React.FC<Props> = ({ message }) => {
    const { t } = useTranslation()

    return (
        <m.div
            className="bg-primary-500 w-screen h-screen absolute z-50 top-0 left-0 grid place-content-center font-bold text-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {message ? (
                <>
                    <span className="w-full p-10 text-2xl text-center break-words">
                        {t('error')}
                    </span>
                    <br />
                    <span className="text-[rgba(0,0,0,0.3)] text-base text-center font-normal">
                        {message}
                    </span>
                </>
            ) : (
                t('loading')
            )}
        </m.div>
    )
}
