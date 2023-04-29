import useSWRImmutable from 'swr/immutable'
import type { Word } from 'types/Word'

export const useGame = (categoryId: number | null) => {
    if (!categoryId) return { data: [], isLoading: false, error: true }

    const { data, error, isLoading } = useSWRImmutable(`/categories/${categoryId}/words`)

    return {
        data: data as Word[],
        isLoading,
        error,
    }
}
