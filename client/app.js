import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.hydrate(<App />, document.getElementById('root'));
// react16中用hydrate代替render
// hydrate 描述的是 ReactDOM 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构
// 并补充事件绑定等 Client 特有内容的过程

const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        render(NextApp);
    })
}
