import { startLoading, finishLoading } from '../modules/loading.js';

export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({ type }); // GET_POST or GET_USERS 타입의 리듀서 함수를 실행시키려는 것
        dispatch(startLoading(type));
        try{
            const response = await request(params); // api에서 받아온 객체를 response에 담음
            dispatch({
                type : SUCCESS, // 오류가 없다면 GET_POST_SUCCESS or GET_USERS_SUCCESS로 리턴하게 됨
                payload: response.data
            }); // payload(파라미터) 를 api 데이터로 넣어서 리턴함
            dispatch(finishLoading(type));
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload : e,
                error : true
            }); //에러 발생시
            dispatch(startLoading(type));
            throw e;
        }
    }
}

// createRequestThunk('GET_USERS', api.getUsers);