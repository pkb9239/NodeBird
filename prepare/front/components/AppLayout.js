import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';

import styled from 'styled-components';


const SearhInput = styled(Input.Search)`
    vertical-align: middle;
`;


const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    // 이제 isLoggedIn이 바뀌면 알아서 리랜더링 된다.
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>부동산</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearhInput enterButton="Search" />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/pkb9239" target="_blank" rel="noreferrer noopener">Made by pkbpl</a>
                </Col>
            </Row>
        </div>
    );
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired,  //여기서 node는 return안에들어갈수있는 모든것들
}

export default AppLayout;