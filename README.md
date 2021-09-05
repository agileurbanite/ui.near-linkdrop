#NEAR Link Drop
### Installation

To start local development, follow these steps:

- Clone repository
- Install all dependencies - `yarn install`
- Checkout to the dev branch and create your own branch
- Run project - `yarn start-testnet` or `yarn-start-mainnet`
  - You will then need to go to `/connect-wallet` to begin
  - If you see `null` in the Header bar, you will probably have to pass
  environment variables manually as such: `REACT_APP_NETWORK=testnet yarn react-app-rewired start`

Now you will be able to use and develop the App on your local machine.

### Testing

Currently, we have no tests.
