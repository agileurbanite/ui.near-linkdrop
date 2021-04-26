import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  name: 'Campaign name length should be between 1 and 100 symbols',
  amountPerLink: 'You should attach more than 1.01 NEAR',
  totalLinks: 'You should choose between 1 and 50 links',
};

const regex = {
  integerPositiveNumber: /^[0-9]+$/g,
  decimalPositiveNumber: /^\d+(\.\d+)?$/g,
};

const schema = object().shape({
  name: string().required(errors.name).min(1, errors.name).max(100, errors.name),

  amountPerLink: string()
    .required(errors.amountPerLink)
    .matches(regex.decimalPositiveNumber, errors.amountPerLink)
    .test({
      test: (value) => Number(value) >= 1.01,
      message: errors.amountPerLink,
    }),

  totalLinks: string()
    .required(errors.totalLinks)
    .matches(regex.integerPositiveNumber, errors.totalLinks)
    .test({ test: (value) => Number(value) > 0, message: errors.totalLinks })
    .test({ test: (value) => Number(value) <= 50, message: errors.totalLinks }),
});

export const createCampaign = yupResolver(schema);
