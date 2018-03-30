import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from './App';
import {Provider} from 'react-redux';
import {store} from './store';

render(
    <Provider store={store}>
    <AppContainer></AppContainer>
    </Provider>
    ,
    document.getElementById('root')
); 