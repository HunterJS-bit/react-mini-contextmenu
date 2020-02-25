import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';

import ContextMenu from '../components/ContextMenu';

function Home(props) {
	
    const [count, setCount] = useState(false);

    const onClickfn = () => {
    	console.log('Clicked ');
    	console.log(count);
    	setCount(!count);
    }

  return (
    <div>
      <h1>Hello, world!</h1>
      { count.toString() }
      	<button onClick={onClickfn}>Click me</button>
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
