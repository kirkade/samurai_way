

let initialState:any = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}



export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'SET_USER_DATA' :
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id:string, login:string, email:string) => ({type: 'SET_USER_DATA', data: {id, login, email}})
