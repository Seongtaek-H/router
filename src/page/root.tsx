import React from 'react';
import { useRouter } from '../components/useRouter';

export const Root = () => {
  const { click } = useRouter();
  return (
    <div>
      <div>root</div>
      <button onClick={click}>about</button>
    </div>
  );
};
