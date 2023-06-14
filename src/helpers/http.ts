import { useAuthStore } from '@store/auth'

const BASE_URL = import.meta.env.VITE_API_URL

const getAuthorizationHeader = () => {
    const token = useAuthStore.getState().token
    return `Bearer ${token}`
}

export const http: Request = async (method, url, data, options = {}) => {
    const { headers: { Authorization, ...headers } = {}, local = false } = options
    const requestHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
        Authorization: Authorization || getAuthorizationHeader(),
    }

    try {
        const response = await fetch(constructUrl(url, local), {
            method: method.toUpperCase(),
            headers: requestHeaders,
            body: !!data ? JSON.stringify(data) : undefined,
        })
        if (!response.ok) {
            console.error(response)
            throw response.statusText
        }

        const responseData = await response.json()

        return { status: true, data: responseData }
    } catch (error) {
        return { status: false, data: error as any }
    }
}

const constructUrl = (url: string, isLocal: boolean): string => {
    if (isLocal && !url.startsWith('/')) {
        throw new Error('URL should start with "/" if "local" set to "true"')
    }
    return isLocal ? url : `${BASE_URL}${url}`
}

type Request = <T>(
    method: string,
    url: string,
    data?: object,
    options?: {
        readonly headers?: Record<string, string>
        readonly local?: boolean
    }
) => Promise<{
    status: boolean
    data: T | undefined
}>
