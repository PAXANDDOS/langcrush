export const SIGNIN_INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    success: false,
    error: '',
}

export enum SIGNIN_ACTION {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SET_FIELD,
}

type Action = {
    type: SIGNIN_ACTION
    payload?: any
}

export const signInReducer = (state: typeof SIGNIN_INITIAL_STATE, action: Action) => {
    const { type, payload } = action

    switch (type) {
        case SIGNIN_ACTION.FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case SIGNIN_ACTION.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case SIGNIN_ACTION.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            }
        case SIGNIN_ACTION.SET_FIELD:
            return {
                ...state,
                [payload.name]: payload.value,
            }
        default:
            return state
    }
}
