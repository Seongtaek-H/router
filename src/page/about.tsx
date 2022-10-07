import React from 'react';
import { useRouter } from '../components/useRouter';

export const About = () => {
  const { click } = useRouter();
  return (
    <div>
      <div>about</div>
      <button onClick={click}>go main</button>
    </div>
  );
};
