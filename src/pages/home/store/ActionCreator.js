import * as ActionTypes  from './ActionTypes'
import axios from 'axios'
import config from '../../../config.json'
export const getArticleListAsync = () => {
    return (dispatch) => {
        axios.get(config.apiUrl+"/api/home").then(data => {
            let res = data.data;
            if(res.code === 0){
                dispatch(setHomeData(res.data))
            } else {
                dispatch(setHomeData([]))
            }
        })
    }

}
export const setHomeData = (data) => {
    return {
        type: ActionTypes.SET_HOME_DATA,
        payload: data 
    }
}
export const loadMoreArticle = (page) => {
    return (dispatch) => {
        axios.get(config.apiUrl+"/api/articles?page="+page).then(res => {
            let data = res.data
            dispatch(setMoreArticle(data.data.articleList))
        })
    }
}
export const setMoreArticle = (payload) => {
    return {
        type: ActionTypes.SET_MORE_ARTICLE_DATA,
        payload
    }
}
export const toggleTopShow = (payload) => {
    return {
        type: ActionTypes.SCROLL_TOP,
        payload
    }
}