import { create } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'

interface GameState {
    modeId: number
    modeName: string
    score: number
    startGame: (id: number, name: string, score: number) => void
    endGame: () => void
}

const storage: PersistOptions<GameState> = { name: 'game-storage', version: 1 }

export const useGameStore = create<GameState>()(
    persist(
        set => ({
            modeId: 0,
            modeName: '',
            score: 0,
            startGame: (id, name) => set({ modeId: id, modeName: name }),
            endGame: () => set({ modeId: 0, modeName: '', score: 0 }),
        }),
        storage
    )
)
