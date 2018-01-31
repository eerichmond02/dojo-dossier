import {SWITCH_TAB, ADD_TAB, ADD_ITEM} from './types'

export const switchTab = (id) => ({type: SWITCH_TAB, payload: id});
export const addTab = (name) => ({type: ADD_TAB, payload: name});
export const addItem = (text, id) => ({type: ADD_ITEM, payload: {text: text, id: id}});