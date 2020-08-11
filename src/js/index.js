import React, { Suspense } from 'react';
import { render } from 'react-dom';

import '../assets/styles/main.scss';
import App from './App';

render(
    <Suspense fallback={'Loading....'}>
        <App/>
    </Suspense>,
 document.getElementById('root'));