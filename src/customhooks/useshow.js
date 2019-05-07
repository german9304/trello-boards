import { useState } from 'react';

function useShow(initVal) {
  const [show, setArea] = useState(initVal);
  function handleShow() {
    setArea(prev => !prev);
  }
  return {
    show,
    handleShow,
  };
}

export default useShow;
