import { useState, useEffect } from 'react';
import { setItem, getItem } from '../utils/localStorage';

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(() => getItem(key, initialValue));

  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
