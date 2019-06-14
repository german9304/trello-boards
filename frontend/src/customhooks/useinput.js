import { useState } from 'react';

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  function handleValue(e) {
    setValue(e.target.value);
  }
  return {
    value,
    handleValue,
  };
}

export default useInput;
