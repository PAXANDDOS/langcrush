import useHowl from 'use-sound'

import { usePreferenceStore } from '@store/preferences'
import type { Sound } from 'types/Sound'
import type { HookOptions } from 'use-sound/dist/types'

export const useSound = (sound: Sound, options?: HookOptions) => {
    const sfxEnabled = usePreferenceStore(state => state.sfx)

    const optionsWithDefaults: HookOptions = {
        ...options,
        volume: 0.25,
        soundEnabled: sfxEnabled,
    }

    return useHowl(sound, optionsWithDefaults)
}
