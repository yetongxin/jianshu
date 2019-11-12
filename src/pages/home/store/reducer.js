import * as ActionTypes from './ActionTypes' 
import { Map, fromJS, List } from 'immutable'
const defaultState = Map({
        articleList: List([]),
        writerList: List([]),
        curPage: 1,
        backTopShow: false
    });
function setHomeData(state, payload) {
    let articleList = [];
    let writerList = [];
    if(!payload){
        return state;
    }
    if(payload.articleList) {
       articleList = payload.articleList 
    }
    if(payload.writerList) {
        writerList = payload.writerList
    }
    return state.set('articleList', fromJS(articleList))
                .set('writerList',fromJS(writerList));
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.SET_HOME_DATA: 
            return setHomeData(state,action.payload);
        case ActionTypes.SET_MORE_ARTICLE_DATA:
            return state.set('articleList',state.get('articleList').concat(fromJS(action.payload)))
                        .set('curPage', state.get('curPage')+1)
        case ActionTypes.SCROLL_TOP:
            return state.set('backTopShow', action.payload)
        default:
            return state;
    }
    return state;
}
