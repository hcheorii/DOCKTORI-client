import { useContext } from 'react';
import {
  ModalsDispatchContext,
  ModalsStateContext,
} from '../../context/ModalsContext';

export const Modals = () => {
  const OpenedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return (
    <>
      {OpenedModals.map((modal, index) => {
        const { Component, props } = modal;

        const onClose = () => {
          close(Component);
        };

        return <Component key={index} {...props} onClose={onClose} />;
      })}
    </>
  );
};
