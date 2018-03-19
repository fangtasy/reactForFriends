import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './redux/reducer'

const store =createStore(reducer,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():()=>{}))
ReactDOM.render(<Provider store={store}>
	<BrowserRouter ><App/></BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();