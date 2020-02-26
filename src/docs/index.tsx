import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import ContextMenu from '../components/ContextMenu';

function Home(props) {
	
    const [count, setCount] = useState(false);

      // Similar to componentDidMount and componentDidUpdate:
	  useEffect(() => {
	      document.addEventListener('contextmenu',onClickfn);
	  });

    const onClickfn = (e) => {
    	e.preventDefault();
    	setCount(!count);
    }

  return (
    <div >
      <h1>Hello, world!</h1>
      { count.toString() }
      	<button>Click me</button>
      	  <ContextMenu show={count}> 
	  	asdasdasdasd
	  </ContextMenu>
    </div>
  );
}

ReactDOM.render(
	<div className="test">
	<Home>
   </Home>
  </div>,
  document.getElementById('root')
);
