import { useTranslation } from 'react-i18next'

import { Button } from '@components/Common/Button'
import { Modal } from '@components/Modal/Modal'

interface Props {
    score: number
    onRestart: () => void
    onExit: () => void
}

export const DefeatModal: React.FC<Props> = ({ score, onRestart, onExit }) => {
    const { t } = useTranslation('game')

    return (
        <Modal title={t('defeat')} handleClose={onExit}>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl text-white">{t('score')}</div>
                <div className="text-9xl font-extrabold text-white">{score}</div>
                <Button content={t('restart')} onClick={onRestart} className="py-4" />
                <Button content={t('exit')} onClick={onExit} className="py-3" />
            </div>
        </Modal>
    )
}
