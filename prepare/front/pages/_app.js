import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

import wrapper from '../store/configureStore';

const App = ({ Component }) => { // 여기서 App은 index.js의 부모인셈 Component에는 index.js의 return부분이 들어간다.
    return (
        <div>
            <Head>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </Head>
            <Component />
        </div>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);   