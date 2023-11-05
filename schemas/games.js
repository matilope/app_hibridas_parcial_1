import yup from 'yup';

export const GameCreateSchema = yup.object({
  name: yup.string()
    .typeError("El nombre tiene que ser una cadena de texto")
    .min(2, "El nombre tiene que tener mínimo 2 letras")
    .required("El nombre es requerido"),
  genre: yup.string()
    .typeError("El género tiene que ser una cadena de texto")
    .min(2, "El género tiene que tener mínimo 2 letras")
    .required("El genero es requerido"),
  members: yup.array()
    .typeError("Los miembros tienen que estar compuestos por una lista")
    .of(yup.string().typeError("El miembro tiene que ser una cadena de texto").min(2, "El nombre del miembro tiene que tener mínimo 2 letras"))
    .min(1, "Al menos un miembro es requerido")
    .required("Los miembros son requeridos"),
  edition: yup.number()
    .typeError("La edición tiene que ser un número")
    .required("La edición es requerida")
});

export const GameUpdateSchema = yup.object({
  name: yup.string()
    .typeError("El nombre tiene que ser una cadena de texto")
    .min(2, "El nombre tiene que tener mínimo 2 letras"),
  genre: yup.string()
    .typeError("El género tiene que ser una cadena de texto")
    .min(2, "El género tiene que tener mínimo 2 letras"),
  members: yup.array()
    .typeError("Los miembros tienen que estar compuestos por una lista")
    .of(yup.string().typeError("El miembro tiene que ser una cadena de texto").min(2, "El nombre del miembro tiene que tener mínimo 2 letras"))
    .min(1, "Al menos un miembro es requerido"),
  edition: yup.number()
    .typeError("La edición tiene que ser un número")
});