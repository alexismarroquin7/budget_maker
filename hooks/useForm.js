import { useState } from "react";

export const useForm = (initialValues, onSubmit) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues(initialValues);
  };

  return { formValues, handleChange, handleSubmit };
};

