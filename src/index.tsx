import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LensTodo from './components/LensTodo';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LensTodo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
