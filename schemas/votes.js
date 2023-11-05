import yup from 'yup';

export const VoteCreateSchema = yup.object({
  judge_id: yup.string().required(),
  game_id: yup.string().required(),
  categories: yup.object().shape({
    gameplay: yup.number().min(1).max(10).required(),
    art: yup.number().min(1).max(10).required(),
    sound: yup.number().min(1).max(10).required(),
    affinity: yup.number().min(1).max(10).required()
  }).required(),
});