import { StacksMainnet, StacksMocknet, StacksTestnet } from 'micro-stacks/network';

export const HIRO_MAINNET_DEFAULT = 'https://stacks-node-api.mainnet.stacks.co';
export const HIRO_REGTEST_DEFAULT = 'https://stacks-node-api.regtest.stacks.co';
export const HIRO_TESTNET_DEFAULT = 'https://stacks-node-api.testnet.stacks.co';
export const HIRO_MOCKNET_DEFAULT = 'http://localhost:3999';

describe('Setting coreApiUrl', () => {
  test('it sets mainnet default url', () => {
    const mainnet = new StacksMainnet();
    expect(mainnet.coreApiUrl).toEqual(HIRO_MAINNET_DEFAULT);
  });
  test('it sets testnet url', () => {
    const testnet = new StacksTestnet();
    expect(testnet.coreApiUrl).toEqual(HIRO_TESTNET_DEFAULT);
  });
  test('it sets mocknet url', () => {
    const mocknet = new StacksMocknet();
    expect(mocknet.coreApiUrl).toEqual(HIRO_MOCKNET_DEFAULT);
  });
  test('it sets custom url', () => {
    const customURL = 'https://customurl.com';
    const customNET = new StacksMainnet({ url: customURL });
    expect(customNET.coreApiUrl).toEqual(customURL);
  });
  test('it prevents changing url after initialisation', () => {
    const network = new StacksMainnet({ url: 'https://legiturl.com' });

    expect(() => (network.coreApiUrl = 'https://dodgyurl.com')).toThrowError();
    expect(network.coreApiUrl).toEqual('https://legiturl.com');
  });
});
