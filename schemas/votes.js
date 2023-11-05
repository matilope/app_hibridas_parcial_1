import yup from 'yup';

export const VoteCreateSchema = yup.object({
  judge_id: yup.string().required("El identificador del juez es requerido"),
  game_id: yup.string().required("El identificador del juego es requerido"),
  categories: yup.object()
    .typeError("Las categorias deben estar dentro de un objeto")
    .shape({
      gameplay: yup.number()
        .typeError("La calificación de la jugabilidad tiene que ser un número")
        .min(1, "La calificación de la jugabilidad debe ser igual o mayor a 1")
        .max(10, "La calificación de la jugabilidad debe ser igual o menor a 10")
        .required("La calificación de la jugabilidad es requerida"),
      art: yup.number()
        .typeError("La calificación del arte tiene que ser un número")
        .min(1, "La calificación del arte debe ser igual o mayor a 1")
        .max(10, "La calificación del arte debe ser igual o menor a 10")
        .required("La calificación del arte es requerida"),
      sound: yup.number()
        .typeError("La calificación del sonido tiene que ser un número")
        .min(1, "La calificación del sonido debe ser igual o mayor a 1")
        .max(10, "La calificación del sonido debe ser igual o menor a 10")
        .required("La calificación del sonido es requerida"),
      affinity: yup.number()
        .typeError("La calificación de la afinidad a la temática tiene que ser un número")
        .min(1, "La calificación de la afinidad a la temática debe ser igual o mayor a 1")
        .max(10, "La calificación de la afinidad a la temática debe ser igual o menor a 10")
        .required("La calificación de la afinidad a la temática es requerida"),
    }).required("Las categorías de calificaciones son requeridas"),
});