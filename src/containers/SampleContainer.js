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
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
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
    ({ sample }) => ({ // 스토어에 있는 상태들을 가지고 옴
        post: sample.post,
        users: sample.users,
        loadingPost: sample.loading.GET_POST,
        loadingUsers: sample.loading.GET_USERS
    }),
    {   // 스토어에 있는 객체(thunk로 함수)들을 가지고 옴       
        getPost,
        getUsers
    }
)(SampleContainer);