import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({dispatch, getState}) => (next) => (action) => {
	console.log(action);
    return next(action);
};



const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares)) //배포용
    : composeWithDevTools(applyMiddleware(...middlewares)) //개발자용
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, { // 두번째는 옵션객체로 debug이부분이 true면 좀 더 리덕스에 관해서 자세한 설명이나옴
    debug: process.env.NODE_ENV === 'development', 
});

export default wrapper;