import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface GameState {
    current: number | null
    setCurrent: (current: number | null) => void
}

export const useGameStore = create<GameState>()(
    devtools(
        persist(
            set => ({
                current: null,
                setCurrent: game => set({ current: game }),
            }),
            { name: 'game-storage', version: 1 }
        )
    )
)
