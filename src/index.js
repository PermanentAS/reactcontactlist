import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactListApp from './components/ContactListApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContactListApp />, document.getElementById('root'));
registerServiceWorker();
