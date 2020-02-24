import { css } from '@emotion/core';
import * as React from 'react';


const styles = {
  root: css({
    position: "fixed",
    padding: "5px 10px",
    background: "white",
    zIndex: 999,
    outline: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  }),
};

export interface HelloProps {
  compiler: string;
  framework: string;
}

export default function ContextMenu(props: HelloProps) {
  return (
    <div css={styles.root} className="context-menu">
      Test component
    </div>
  );
}
