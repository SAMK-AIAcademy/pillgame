import React, {useState} from 'react';
import {createContext} from 'react';

const StoreContext = createContext([{}, () => {}]);

const StoreProvider = ({children}) => {
  const [state, setState] = useState({
    score: 0,
    level: 0,
  });
  console.log('moro');

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
