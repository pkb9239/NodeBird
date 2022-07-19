import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const SearhInput = styled(Input.Search)`
    vertical-align: middle;
`;

const Global = createGlobalStyle`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child {
       paddig-left: 0 !important;
    }
    .ant-col:last-child {
        paddig-right: 0 !important;
    }
`


const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);
    // 이제 logInLodding 바뀌면 알아서 리랜더링 된다.
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
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
                    {me ? <UserProfile /> : <LoginForm />}
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