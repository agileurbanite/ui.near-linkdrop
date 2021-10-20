import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const errors = {
  invalidAccountIdFormat: () => (
    <>
      Campaign name doesn&apos;t follow an account id pattern. More details&nbsp;
      <a
        rel="noreferrer"
        target="_blank"
        href="https://nomicon.io/DataStructures/Account.html#account-id-rules"
        style={{ fontWeight: 700 }}
      >
        here
      </a>
    </>
  ),
  requiredName: 'Campaign name is required',
  nameMaxLength: (max) => `Campaign name should be equal or less than ${max} symbols`,
  amountPerLink: 'You should attach more than 0.01 NEAR',
  totalLinks: 'You should choose between 1 and 10 000 links',
  totalLinksInteger: 'This field should be an integer number',
  nonUniqueCampaignName: 'Campaign with this name already exists',
};

const regex = {
  accountId: /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/g, // https://nomicon.io/DataStructures/Account.html#account-id-rules
  integerPositiveNumber: /^[0-9]+$/g,
  decimalPositiveNumber: /^\d+(\.\d+)?$/g,
};

const name = string()
  .required(errors.requiredName)
  .test({
    test: (value, context) => {
      // 64 is a max account id length including user account id and the separator
      // for example .user.linkdrop.testnet | .alice.linkdrop.near
      const max = 64 - 1 - context.options.context.linkdropAccountId.length;
      if (value.length <= max) return true;
      return context.createError({ path: 'name', message: errors.nameMaxLength(max) });
    },
  })
  .matches(regex.accountId, errors.invalidAccountIdFormat)
  .test({
    test: (value, context) => !context.options.context.campaignNames.has(value),
    message: errors.nonUniqueCampaignName,
  });

const amountPerLink = string()
  .required(errors.amountPerLink)
  .matches(regex.decimalPositiveNumber, errors.amountPerLink)
  .test({
    test: (value) => Number(value) >= 0.01,
    message: errors.amountPerLink,
  });

const totalLinks = string()
  .required(errors.totalLinks)
  .matches(regex.integerPositiveNumber, errors.totalLinksInteger)
  .test({ test: (value) => Number(value) > 0, message: errors.totalLinks })
  .test({ test: (value) => Number(value) <= 10000, message: errors.totalLinks });

const schema = object().shape({
  name,
  amountPerLink,
  totalLinks,
});

export const validations = yupResolver(schema);
