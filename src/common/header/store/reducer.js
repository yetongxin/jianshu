import * as ActionTypes from './constants' 
import { Map } from 'immutable'
const defaultState = Map({
        focusedSearch: false,
        curSearchPage: 1,
        totalSearchPage: 1
    });

export default (state = defaultState, action) => {
    console.log(action)
    switch(action.type) {
        case ActionTypes.SEARCH_FOCUS:
            return state.set('focusedSearch',true);
        case ActionTypes.SEARCH_BLUR: 
            return state.set('focusedSearch',false);
        case ActionTypes.SET_SEARCHINFO_DATA:
            return state.set('searchInfoList',action.payload.data).set('totalSearchPage',action.payload.pageNum);
        case ActionTypes.MOUSE_ENTER:
            return state.set('isMouseEnter',true);
        case ActionTypes.MOUSE_LEAVE:
            return state.set('isMouseEnter',false);
        case ActionTypes.SWITCH_SEARCH_INFO:
            let tmpCurPage = (state.get('curSearchPage') + 1) > state.get('totalSearchPage') ? 1 : (state.get('curSearchPage') + 1)
            return state.set('curSearchPage', tmpCurPage)
        default:
            return state;
        }
}
