import yup from 'yup';

export const JudgeCreateSchema = yup.object({
  name: yup.string()
    .typeError("El nombre tiene que ser una cadena de texto")
    .min(2, "El nombre tiene que tener mínimo 2 letras")
    .required("El nombre es requerido")
});
