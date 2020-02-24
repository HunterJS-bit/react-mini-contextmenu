import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ContextMenu from '../components/ContextMenu';

ReactDOM.render(
  <ContextMenu compiler="TypeScript" framework="React" />,
  document.getElementById('root')
);
