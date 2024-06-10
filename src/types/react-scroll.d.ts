declare module 'react-scroll' {
  import * as React from 'react';

  interface ScrollProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    className?: string;
    activeClass?: string;
    containerId?: string;
    container?: HTMLElement;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<ScrollProps, any> {}
  export class Element extends React.Component<any, any> {}
  export function animateScroll(): void;
  export function scrollSpy(): void;
}