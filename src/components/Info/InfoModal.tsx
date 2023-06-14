import { useTranslation } from 'react-i18next'
import type { ModalProps } from 'types/Modal'
import { Modal } from '../Modal/Modal'

export const InfoModal: React.FC<ModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation('home')

    return (
        <Modal open={open} title={t('info.title')} onClose={onClose}>
            <div className="text-sm flex flex-col gap-3">
                <p>{t('info.1')}</p>
                <p>{t('info.2')}</p>
                <p>
                    {t('info.3')} -{' '}
                    <a href="mailto:service.langcrush@gmail.com" className="text-green">
                        service.langcrush@gmail.com
                    </a>
                </p>
                <p>
                    Created by{' '}
                    <a href="https://github.com/PAXANDDOS" target="_blank" className="text-green">
                        Paul Litovka
                    </a>{' '}
                    and{' '}
                    <a href="https://github.com/Gazaris" target="_blank" className="text-green">
                        Artem Nevodnichiy
                    </a>
                </p>
                <p className="text-gray-300">
                    Clown by Sakura Girl | https://soundcloud.com/sakuragirl_official
                    <br />
                    Creative Commons CC BY 3.0 <br />
                    https://creativecommons.org/licenses/by/3.0/
                    <br />
                </p>
                <p className="text-gray-300">
                    Sounds from freesound.org
                    <br />
                    Creative Commons CC BY 3.0 <br />
                    https://creativecommons.org/licenses/by/3.0/
                    <br />
                </p>
            </div>
        </Modal>
    )
}
