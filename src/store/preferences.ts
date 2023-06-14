import { create } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'

import type { Preferences } from 'types/Preferences'

interface PreferenceState extends Preferences {
    setMusic: (music: Preferences['music']) => void
    setSfx: (sfx: Preferences['sfx']) => void
    setVibration: (vibration: Preferences['vibration']) => void
}

const storage: PersistOptions<PreferenceState> = { name: 'preferences', version: 1 }

export const usePreferenceStore = create<PreferenceState>()(
    persist(
        set => ({
            music: true,
            setMusic: music => set({ music }),
            sfx: true,
            setSfx: sfx => set({ sfx }),
            vibration: true,
            setVibration: vibration => set({ vibration }),
        }),
        storage
    )
)
