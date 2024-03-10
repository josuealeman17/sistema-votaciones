import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name } = target;
    let valor = target.value.replace(/\D/g, "");
    valor = valor.slice(0, 10);
    setFormState({
      ...formState,
      [name]: valor,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
