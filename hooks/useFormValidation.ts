import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

const useFormValidation = (schema: AnyObjectSchema) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return { handleSubmit, register, errors };
};

export default useFormValidation;
