// smart-contracts/tests/Permissions.test.ts

import { AptosClient, AptosAccount, FaucetClient, HexString } from 'aptos';
import { expect } from 'chai';
import { NODE_URL, FAUCET_URL } from '../config'; // Ensure these are set correctly in config

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

describe('Permissions Smart Contract', () => {
  let account: AptosAccount;
  let entityAccount: AptosAccount;

  before(async () => {
    // Create a new account and fund it using the Faucet
    account = new AptosAccount();
    entityAccount = new AptosAccount();

    await faucetClient.fundAccount(account.address(), 100_000_000); // Fund with some test coins
    await faucetClient.fundAccount(entityAccount.address(), 100_000_000); // Fund the entity account

    // Deploy or initialize the Permissions module (if necessary)
    // This depends on your deployment strategy
  });

  it('should initialize the access list for the account', async () => {
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::Permissions::init_access_list',
      arguments: [],
      type_arguments: [],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(transactionRes.hash);

    expect(transactionRes.hash).to.be.a('string');
  });

  it('should grant access to an entity', async () => {
    const entityAddress = entityAccount.address().hex();
    const accessType = "read";

    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::Permissions::grant_access',
      arguments: [entityAddress, accessType],
      type_arguments: [],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(transactionRes.hash);

    expect(transactionRes.hash).to.be.a('string');
  });

  it('should retrieve the access list for the account', async () => {
    const resource = await client.getAccountResource(
      account.address(),
      '0xYourModuleAddress::Permissions::AccessList'
    );

    expect(resource.type).to.equal('0xYourModuleAddress::Permissions::AccessList');
    expect(resource.data.permissions).to.be.an('array');
    expect(resource.data.permissions.length).to.be.greaterThan(0);
  });

  it('should revoke access from an entity', async () => {
    const entityAddress = entityAccount.address().hex();

    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::Permissions::revoke_access',
      arguments: [entityAddress],
      type_arguments: [],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(transactionRes.hash);

    expect(transactionRes.hash).to.be.a('string');

    // Verify the entity has been removed from the access list
    const resource = await client.getAccountResource(
      account.address(),
      '0xYourModuleAddress::Permissions::AccessList'
    );
    const permissions = resource.data.permissions;
    const entityExists = permissions.some((perm: any) => perm.entity === entityAddress);

    expect(entityExists).to.be.false;
  });
});
