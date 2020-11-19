import React, {useState} from 'react';
import {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 
Example usage at component, imports not in example

[state, setState] = useContext(StoreContext)
*/

const setValue = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('Error storing data to local storage');
  }
};

const getValue = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error reading data from local storage');
  }
};

const StoreContext = createContext([{}, () => {}]);

let storeInitialized = false;

const StoreProvider = ({children}) => {
  const [state, setState] = useState({});
  if (!storeInitialized) {
    getValue('state').then((value) => {
      setState(value);
      storeInitialized = true;
    });
  } else {
    setValue(state, 'state').then(() => console.log(state));
  }

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
