export const SIGNUP_INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    loading: false,
    success: false,
    error: '',
}

export enum SIGNUP_ACTION {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SET_FIELD,
}

type Action = {
    type: SIGNUP_ACTION
    payload?: any
}

export const signUpReducer = (state: typeof SIGNUP_INITIAL_STATE, action: Action) => {
    const { type, payload } = action

    switch (type) {
        case SIGNUP_ACTION.FETCH_START:
            return {
                ...state,
                loading: true,
            }
        case SIGNUP_ACTION.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case SIGNUP_ACTION.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            }
        case SIGNUP_ACTION.SET_FIELD:
            return {
                ...state,
                [payload.name]: payload.value,
            }
        default:
            return state
    }
}
