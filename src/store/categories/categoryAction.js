import { createAction } from "../../utils/reducer/reducer"
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes"

export const setCategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories)