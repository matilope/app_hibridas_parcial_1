import yup from 'yup';

export const JudgeCreateSchema = yup.object({
  name: yup.string().required()
});
