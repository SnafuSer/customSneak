// ***** Actions *****
export const CREATE_USER = 'CREATE_USER';
export const SELECT_USER = 'SELECT_USER';

// ***** User *****
export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    tel: string;
    description: string;
}
// ***** Initial data *****
export const userInitial: User = {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    tel: null,
    description: null,
}

// ***** Reducer *****
export function userReducer(state: User, action): User {
    switch (action.type) {

        case CREATE_USER:
            action.payload.createdAt = new Date();
            return action.payload

        case SELECT_USER:
            return action.payload

        default: return state;
    }
}
