import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';

const ButtonWrapper = styled(Button)`
    margin-top: 10px;
    margin-left: 40px;
`;
const UserProfile = () => {
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, [])
    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>Pkb</Avatar>}
                title="박경빈"
            />
            <ButtonWrapper onClick={onLogOut}>로그아웃</ButtonWrapper>
        </Card>
    );
}

export default UserProfile;