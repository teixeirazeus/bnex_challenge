/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useContext } from "react";

type ModalContextType = {
  modals: { [key: string]: boolean };
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
};

const ModalContext = createContext<ModalContextType>({
  modals: {},
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalIDs = {
  PRODUCT_CREATE: "productCreate",
  PRODUCT_EDIT: "productEdit",
};

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({});

  const openModal = (id: string) =>
    setModals((prevModals) => ({ ...prevModals, [id]: true }));

  const closeModal = (id: string) =>
    setModals((prevModals) => ({ ...prevModals, [id]: false }));

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
