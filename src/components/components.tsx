import React, { useContext, useState } from 'react';
import { Context } from './context';

interface RouterType {
  children: React.ReactNode;
}

interface RouteType {
  path: string;
  component: React.ReactElement;
}
export const Router = ({ children }: RouterType) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  onpopstate = () => setCurrentPath(window.location.pathname);

  return (
    <Context.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </Context.Provider>
  );
};

export const Route = ({ path, component }: RouteType) => {
  const { currentPath } = useContext(Context);
  return currentPath === path ? component : <></>;
};
