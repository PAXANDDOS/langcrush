import { Howl } from 'howler'
import { useEffect, useState } from 'react'

import { usePreferenceStore } from '@store/preferences'
import { Sound } from 'types/Sound'

export const useMusic = () => {
    const musicEnabled = usePreferenceStore(state => state.music)
    const [audio, setAudio] = useState<Howl | null>(null)

    useEffect(() => {
        if (!musicEnabled) {
            return
        }

        const howl = new Howl({
            src: Sound.Background,
            onplayerror: (e, d) => {
                console.log(e, d)
                howl.once('unlock', () => {
                    howl.play()
                })
            },
            loop: true,
            volume: 0.25,
            autoplay: true,
        })
        setAudio(howl)

        return () => {
            howl.unload()
        }
    }, [musicEnabled])

    return [audio] as const
}
