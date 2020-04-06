import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from '../lib/createRequestThunk.js';

const GET_POST = "sample/GET_POST"; // 리듀서 함수에서 [GET_POST]와 같다.
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

// thunk 함수 생성
// thunk 함수 내부에서는 시작했을 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치해야함.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);
// 초기 상태 선언, 요청의 로딩 중 상태는 loading 이라는 객체에서 관리

const initialState = {
  post: null,
  users: null
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post : action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users : action.payload
    }),
  },
  initialState
);

export default sample;
