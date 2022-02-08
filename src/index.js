import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {Global} from "./styles/style";

import './css/bootstrap-reboot.min.css'
import './css/font.css'

ReactDOM.render(
    <StrictMode>
        <App/>
        <Global/>
    </StrictMode>,
    document.getElementById('root')
);
