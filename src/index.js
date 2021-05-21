import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import store from './store';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundary';
import { BookProvider } from './components/Context';
import Service from './services'


const services = new Service();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookProvider value={services}>
                <Router>
                    <App />
                </Router>
            </BookProvider>
        </ErrorBoundry> 
    </Provider>,
    document.getElementById('root')
);