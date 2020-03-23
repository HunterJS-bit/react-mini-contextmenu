import React, { useState, useRef, useEffect } from 'react';


const baseStyles = {
  position: 'fixed',
  padding: '5px 10px',
  background: 'white',
  zIndex: 999,
  outline: 'none',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
};

export interface Event {
  event: any;
  styles: {
    top: number;
    left: number;
  };
}

const ContextMenu = (props: any) => {
  const [state, setState] = useState({
    event: null,
    styles: {
      top: 0 as number,
      left: 0 as number,
    },
  });

  const inputRef = useRef(null);

  useEffect(() => {
    if (props.event) {
      setState((state: Event) => ({ ...state, event: props.event }));
    } else {
      setState((state: Event) => ({ ...state, event: false }));
    }
  }, [props.event]);

  useEffect(() => {
    if (state.event) {
      const left = state.event.left || state.event.pageX || state.event.clientX;
      const top = state.event.top || state.event.pageY || state.event.clientY;

      setState((state: Event) => ({ ...state, styles: { left: left + 5, top } }));
      inputRef.current.focus();
    }
  }, [state.event]);

  const hideMenu = () => {
    setState((state:Event) => ({ ...state, event: null, styles: { left: 0, top: 0 } }));
  };

  const handleBlur = () => {
    hideMenu();
  };


  if (state.event) {
    return (
      <div tabIndex="0" style={{ ...baseStyles, ...state.styles }} ref={inputRef} className="context" onBlur={handleBlur}>
        <div className="wrapper">
          {props.children}
        </div>
      </div>
    );
  }
  return null;
}

export default ContextMenu;
