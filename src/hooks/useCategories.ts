import { fetcher } from '@constants/fetcher'
import useSWRImmutable from 'swr/immutable'
import type { Category } from 'types/Category'

export const useCategories = () => {
    const { data, error, isLoading } = useSWRImmutable('/categories', fetcher)

    return {
        data: data as Category[],
        isLoading,
        error,
    }
}
