import React, { useState, CSSProperties } from 'react';
import * as ReactDOM from 'react-dom';

// eslint-disable-next-line import/extensions
import ContextMenu from '../components/ContextMenu';

const buttonStyle = {
  display: 'inline-block',
  padding: '0.3em 1.2em',
  margin: '0 0.1em 0.1em 0',
  border: '0.16em solid rgba(255,255,255,0)',
  boxSizing: 'border-box',
  textDecoration: 'none',
  fontWeight: 300,
  color: '#FFFFFF',
  textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
  textAlign: 'center',
  backgroundColor: '#4e9af1',
} as CSSProperties;

const listStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: '#333',
} as CSSProperties;

const listItem = {
  minWidth: 150,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  padding: '8px 12px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #ecf0f1',
  cursor: 'pointer',
} as CSSProperties;

function Home() {
  const [event, setEvent] = useState(false);

  const clicked = (e: MouseEvent | any) => {
    e.preventDefault();
    e.persist();
    console.log('should open context menu');
    setEvent(e);
  };

  const doAction = () => {
    alert('Done action, closing context menu');
    setEvent(false);
  };
  return (
    <div>
      <h1>React Context Menu demo</h1>
      	  <ContextMenu event={event}>
        <ul style={listStyle} className="menu-options">
          <li style={listItem} onClick={doAction} className="menu-option">Back</li>
          <li style={listItem} onClick={doAction} className="menu-option">Reload</li>
          <li style={listItem} onClick={doAction} className="menu-option">Save</li>
          <li style={listItem} className="menu-option">Save As</li>
        </ul>
      </ContextMenu>
      <button style={buttonStyle} onContextMenu={clicked}>Right Click Me</button>
    </div>
  );
}

ReactDOM.render(
  <div className="test">
    <Home />
  </div>,
  document.getElementById('root'),
);
