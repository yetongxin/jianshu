import * as ActionTypes from './constants';
import axios from 'axios'
import { List } from 'immutable'
// 异步请求在action中处理，得到数据后再进行reducer
const searchItemPerPage = 10;
export const SearchFocus = () => {
    return {
        type: ActionTypes.SEARCH_FOCUS
    }
} 

export const SearchBlur = () => {
    return {
        type: ActionTypes.SEARCH_BLUR
    }
} 
const GetSearchInfo = (data, pageNum) => {
    return {
        type: ActionTypes.SET_SEARCHINFO_DATA,
        payload: {data:List(data.slice()), pageNum: pageNum}
    }
}
export const GetSearchInfoAsync = (curPage) => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then(res => {
            let data = res.data
            console.log(data)
            if(data.code === 0){
                let pageNum = Math.ceil(data.data.length/searchItemPerPage);
                dispatch(GetSearchInfo(data.data,pageNum));
            }
            
        })
    }
}
export const MouseEnter = () => {
    return {
        type: ActionTypes.MOUSE_ENTER
    }
}

export const MouseLeave = () => {
    return {
        type: ActionTypes.MOUSE_LEAVE
    }
}
export const SwitchSeachInfo = (curPage) => {
    return {
        type: ActionTypes.SWITCH_SEARCH_INFO,
        payload: curPage
    }
}