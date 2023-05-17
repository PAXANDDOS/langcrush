import type { User } from 'types/User'
import { create } from 'zustand'
import { PersistOptions, devtools, persist } from 'zustand/middleware'

interface AuthState extends User {
    auth: boolean
    token: string
    setUser: (name: string, email: string, token: string) => void
}

const storage: PersistOptions<AuthState> = { name: 'auth-storage', version: 1 }

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            set => ({
                auth: false,
                name: '',
                email: '',
                token: '',
                setUser: (...data) =>
                    set({
                        name: data[0],
                        email: data[1],
                        token: data[2],
                    }),
            }),
            storage
        )
    )
)
