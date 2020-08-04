import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handlerChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  const clearForm = () => setValues(initialValues);

  return {
    values,
    handlerChange,
    clearForm,
  };
};

export default useForm;
