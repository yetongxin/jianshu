import reducer from './reducer';
import * as ActionTypes from './constants';
import * as ActionCreator from './actionCreator'

//提供一个公共的接口，暴露出Header组件的reducer,actionTypes,ActionCreator
export { reducer,ActionTypes,ActionCreator };