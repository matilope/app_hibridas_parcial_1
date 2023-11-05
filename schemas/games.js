import yup from 'yup';

export const GameCreateSchema = yup.object({
  name: yup.string().min(2, "El nombre tiene que tener mínimo 2 letras").required(),
  genre: yup.string().required(),
  members:  yup.array().of(yup.string()).required(),
  edition:  yup.number().required()
  /*
  average_qualification: yup.object().shape({
    average_gameplay: yup.number(),
    average_art: yup.number(),
    average_sound: yup.number(),
    average_affinity: yup.number()
  })*/
});

export const GameUpdateSchema = yup.object({
  name: yup.string(),
  genre: yup.string(),
  members:  yup.array().of(yup.string()),
  edition:  yup.number()
});