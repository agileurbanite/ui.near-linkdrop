import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  wordIsRequired: 'This is a required field',
  wordNotMatch: 'Entered word does not match with phrase word',
};

const schema = object().shape({
  word: string()
    .required(errors.wordIsRequired)
    .test({
      test: (value, { options }) => {
        const { wordList, randomWordIndex } = options.context;
        return wordList[randomWordIndex - 1] === value;
      },
      message: errors.wordNotMatch,
    }),
});

export const validations = yupResolver(schema);
