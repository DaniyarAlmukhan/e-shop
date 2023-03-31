import { createAction } from "../../utils/reducer/reducer"
import { USER_ACION_TYPES } from "./userTypes"

export const setCurrentUser = (user) => createAction(USER_ACION_TYPES.SET_CURRENT_USER, user)
