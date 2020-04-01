const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action) // 다음 미들웨어 or 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 액션이 전달 되었으니 업데이트된 상태
    console.groupEnd();
}

/*const loggerMiddleware = function loggerMiddleware(store) {
    return function(next) {
        return function(action) {

        }
    }
}*/

export default loggerMiddleware;