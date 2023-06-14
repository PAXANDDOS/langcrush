const BASE_URL = import.meta.env.VITE_API_URL

export const fetcher = (...args: [RequestInfo | URL, RequestInit | undefined]) => {
    if (args[0].toString().startsWith('/')) {
        args[0] = `${BASE_URL}${args[0]}`
    }

    return fetch(...args).then(res => res.json())
}
