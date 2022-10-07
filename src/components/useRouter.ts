import { useContext } from 'react';
import { Context } from './context';

export function useRouter() {
  const { currentPath, setCurrentPath } = useContext(Context);

  const push = (path: string) => {
    window.history.pushState({}, '', path);

    if (path !== currentPath) {
      setCurrentPath(path);
    }
  };

  const click = (e: any) => {
    e.preventDefault();
    const text = e.target.textContent;
    if (text === 'go main') push('/');
    if (text === 'about') push('/about');
  };

  return { push, click };
}
