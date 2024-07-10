import {
  ModalsStateContext,
  ModalsDispatchContext,
  Modal,
} from './ModalsContext';
import React, { useMemo, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ModalsProvider = ({ children }: Props) => {
  const [openedModals, setOpenedModals] = useState<Modal[]>([]);

  const open = (Component: React.ComponentType<any>, props: any) => {
    setOpenedModals((modals) => [...modals, { Component, props }]);
  };

  const close = (Component: React.ComponentType<any>) => {
    setOpenedModals((modals) =>
      modals.filter((modal) => modal.Component !== Component)
    );
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
