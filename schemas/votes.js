import yup from 'yup';

export const VoteCreateSchema = yup.object({
  game_id: yup.string().required(),
  judge_id: yup.string().required(),
  categories: yup.object().shape({
    jugabilidad: yup.number().min(1).max(10).required(),
    arte: yup.number().min(1).max(10).required(),
    sonido: yup.number().min(1).max(10).required(),
    afinidad: yup.number().min(1).max(10).required()
  }).required(),
});