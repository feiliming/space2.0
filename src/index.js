import React from 'react'; //必须引入react，否则报 React is not defined
import ReactDOM from 'react-dom';

import Hello from './component/hello.jsx';

ReactDOM.render(<Hello/>,document.getElementById('root'));