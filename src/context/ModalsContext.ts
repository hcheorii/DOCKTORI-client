import React, { createContext } from 'react';

export interface Modal {
  Component: React.ComponentType<any>;
  props: any;
}

export interface ModalDispatch {
  open: (Component: React.ComponentType<any>, props: any) => void;
  close: (Component: React.ComponentType<any>) => void;
}

export const ModalsDispatchContext = createContext<ModalDispatch>({
  open: () => {},
  close: () => {},
});

export const ModalsStateContext = createContext<Modal[]>([]);
