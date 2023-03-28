import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispComponent = () => {
  useEffect(() => {
    Crisp.configure('a773553c-07e5-4c2e-b0f7-f7946ce35435');
  }, []);
  return null;
};

export default CrispComponent;
