import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import connect from './DataProvider'

const ConnectedApp = connect(App)

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();
