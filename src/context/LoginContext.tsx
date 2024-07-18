import React, { createContext, useState } from 'react';

interface LoginModalContextProps {
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModalContext = createContext<LoginModalContextProps>({
  showLoginModal: false,
  setShowLoginModal: () => {},
});

export const LoginProvider: React.FC = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  return (
    <LoginModalContext.Provider value={{ showLoginModal, setShowLoginModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};
