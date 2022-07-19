import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { logoutRequestAction } from '../reducers/user';

const ButtonWrapper = styled(Button)`
    margin-top: 10px;
    margin-left: 40px;
`;
const UserProfile = () => {
    const dispatch = useDispatch();
    const { me, logOutLoading } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, [])
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />{me.Posts.length}</div>,
                <div key="followings">팔로워<br />{me.Followings.length}</div>,
                <div key="followings">팔로잉<br />{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <ButtonWrapper onClick={onLogOut} loading={logOutLoading}>로그아웃</ButtonWrapper>
        </Card>
    );
}

export default UserProfile;