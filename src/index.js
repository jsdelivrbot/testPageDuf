import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app'
import HomeComponent from './components/home';
import MoreComponent from './components/more';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="home" component={HomeComponent}>
                <Route path="more" component={MoreComponent} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
