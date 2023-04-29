import { create } from 'zustand'
import { PersistOptions, devtools, persist } from 'zustand/middleware'

interface AuthState {
    token: string | null
    setToken: (token: string | null) => void
}

const storage: PersistOptions<AuthState> = { name: 'auth-storage', version: 1 }

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            set => ({
                token: null,
                setToken: token => set({ token: token }),
            }),
            storage
        )
    )
)
