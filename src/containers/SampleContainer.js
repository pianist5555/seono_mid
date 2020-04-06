import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers} from '../modules/sample';

const { useEffect } = React;
const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    //클래스 형태 컴포넌트였다면 componentDidMount
    useEffect(() => {
        getPost(1); // createRequestThunk에서 api에서 보내주는 객체의 성공 실패여부를 판단하고 dispatch로 리듀서 함수를 실행시켜 store 상태를 변화시킴
        getUsers(1);
    }, [getPost, getUsers]); // getPost등 스토어 상태가 변화되면 useEffect 실행(렌더링)
    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({ // 스토어에 있는 상태들을 가지고 옴
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {   // 스토어에 있는 객체(thunk로 함수)들을 가지고 옴       
        getPost,
        getUsers
    }
)(SampleContainer);