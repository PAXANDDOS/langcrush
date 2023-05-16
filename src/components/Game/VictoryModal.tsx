import { useTranslation } from 'react-i18next'

import { Button } from '@components/Common/Button'
import { Modal } from '@components/Modal/Modal'
import type { ModalProps } from 'types/Modal'

interface Props extends ModalProps {
    score: number
    onRestart: () => void
}

export const VictoryModal: React.FC<Props> = ({ open, score, onRestart, onClose }) => {
    const { t } = useTranslation('game')

    return (
        <Modal open={open} title={t('victory')} onClose={onClose}>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-2xl text-white">{t('score')}</div>
                <div className="text-9xl font-extrabold text-white">{score}</div>
                <Button content={t('restart')} onClick={onRestart} className="py-4" />
                <Button content={t('exit')} onClick={onClose} className="py-3" />
            </div>
        </Modal>
    )
}
