import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/app'
import reducer from './reducers/index'
import Home from './components/home'
import Resources from './components/resources'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)} >
        <Router history={browserHistory} >
            <Route path="/" component={App} >
                <IndexRoute component={Home} />
                <Route path="resources" component={Resources} />
            </Route>
            
        </Router>
    </Provider>
    , document.querySelector('.container'))

