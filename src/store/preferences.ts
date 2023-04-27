import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface PreferenceState {
    music: boolean
    setMusic: (music: boolean) => void
    sfx: boolean
    setSfx: (sfx: boolean) => void
    vibration: boolean
    setVibration: (vibration: boolean) => void
}

export const usePreferenceStore = create<PreferenceState>()(
    devtools(
        persist(
            set => ({
                music: true,
                setMusic: music => set({ music }),
                sfx: true,
                setSfx: sfx => set({ sfx }),
                vibration: true,
                setVibration: vibration => set({ vibration }),
            }),
            { name: 'preferences', version: 1 }
        )
    )
)
