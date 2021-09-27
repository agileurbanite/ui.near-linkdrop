import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  name: 'Campaign name length should be between 1 and 64 symbols',
  amountPerLink: 'You should attach more than 0.01 NEAR',
  totalLinks: 'You should choose between 1 and 10 000 links',
  totalLinksInteger: 'This field should be an integer number',
  nonUniqueCampaignName: 'Campaign with this name already exists',
};

const regex = {
  integerPositiveNumber: /^[0-9]+$/g,
  decimalPositiveNumber: /^\d+(\.\d+)?$/g,
};

const schema = object().shape({
  name: string()
    .required(errors.name)
    .min(1, errors.name)
    .max(64, errors.name)
    .test({
      test: (value, { options }) => !options.context.campaignNames.has(value),
      message: errors.nonUniqueCampaignName,
    }),

  amountPerLink: string()
    .required(errors.amountPerLink)
    .matches(regex.decimalPositiveNumber, errors.amountPerLink)
    .test({
      test: (value) => Number(value) >= 0.01,
      message: errors.amountPerLink,
    }),

  totalLinks: string()
    .required(errors.totalLinks)
    .matches(regex.integerPositiveNumber, errors.totalLinksInteger)
    .test({ test: (value) => Number(value) > 0, message: errors.totalLinks })
    .test({ test: (value) => Number(value) <= 10000, message: errors.totalLinks }),
});

export const validations = yupResolver(schema);
