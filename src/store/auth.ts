import { create } from 'zustand'
import { PersistOptions, devtools, persist } from 'zustand/middleware'
import type { User } from 'types/User'

interface AuthState extends User {
    token: string
    setToken: (token: string | null) => void
}

const storage: PersistOptions<AuthState> = { name: 'auth-storage', version: 1 }

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            set => ({
                name: '',
                email: '',
                token: '',
                setToken: token => set({ token: token || '' }),
            }),
            storage
        )
    )
)
