import { userReducer, userInitial } from './user'

export const reducers = {
  user: userReducer,
}

export const INITIAL_STATE = {
  user: userInitial,
}
