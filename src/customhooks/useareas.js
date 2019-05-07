import useShow from './useshow';
import useInput from './useinput';

function useAreas(cond, title, dispatch) {
  const { show, handleShow } = useShow(cond);
  const { value, handleValue } = useInput(title);
  function handleClick() {
    handleShow();
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    // dispatch();
  }

  return {
    show,
    handleShow,
    value,
    handleValue,
    handleClick,
    handleSubmit,
  };
}

export default useAreas;
