import type { User } from 'types/User'
import { create } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'

interface AuthState extends User {
    token: string
    signIn: (token: string, user: User) => void
    signOut: () => void
}

const storage: PersistOptions<AuthState> = { name: 'auth-storage', version: 1 }

export const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            name: '',
            email: '',
            avatar: '',
            token: '',
            signIn: (token, user) =>
                set({
                    token,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                }),
            signOut: () =>
                set({
                    token: '',
                    name: '',
                    email: '',
                    avatar: '',
                }),
        }),
        storage
    )
)
