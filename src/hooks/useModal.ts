import React, { useContext } from 'react';
import { ModalsDispatchContext } from '../context/ModalsContext';
export const useModal = () => {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component: React.ComponentType<any>, props: any) => {
    open(Component, props);
  };

  const closeModal = (Component: React.ComponentType<any>) => {
    close(Component);
  };

  return {
    openModal,
    closeModal,
  };
};
