import React, { Dispatch, SetStateAction } from 'react';

interface contextType {
  currentPath: string;
  setCurrentPath: (arg: string) => void;
}

const initialContext: contextType = {
  currentPath: '/',
  setCurrentPath: () => {},
};

export const Context = React.createContext(initialContext);
