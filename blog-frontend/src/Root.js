/*
 이름이 App이 아니라 Root인 이유는 이 컴포넌트를 클라이언트 쪽에서만
 사용하기 때문입니다. 
*/

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import configure from './store/configure';

const store = configure();

const Root = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

export default Root;