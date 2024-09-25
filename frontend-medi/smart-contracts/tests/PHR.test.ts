// smart-contracts/tests/PHR.test.ts

import { AptosClient, AptosAccount, FaucetClient, HexString } from 'aptos';
import { expect } from 'chai';
import { NODE_URL, FAUCET_URL } from '../config'; // Ensure these are set correctly in config

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

describe('PHR Smart Contract', () => {
  let account: AptosAccount;

  before(async () => {
    // Create a new account and fund it using the Faucet
    account = new AptosAccount();
    await faucetClient.fundAccount(account.address(), 100_000_000); // Fund with some test coins

    // Deploy or initialize the PHR module (if necessary)
    // This depends on your deployment strategy
  });

  it('should initialize health records for the account', async () => {
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::PHR::init_account',
      arguments: [],
      type_arguments: [],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(transactionRes.hash);

    expect(transactionRes.hash).to.be.a('string');
  });

  it('should add a new health record', async () => {
    const title = "Blood Test";
    const details = "Detailed blood test results for January 2024.";

    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::PHR::add_record',
      arguments: [title, details],
      type_arguments: [],
    };

    const txnRequest = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(transactionRes.hash);

    expect(transactionRes.hash).to.be.a('string');
  });

  it('should retrieve health records', async () => {
    const resource = await client.getAccountResource(
      account.address(),
      '0xYourModuleAddress::PHR::HealthRecords'
    );

    expect(resource.type).to.equal('0xYourModuleAddress::PHR::HealthRecords');
    expect(resource.data.records).to.be.an('array');
    expect(resource.data.records.length).to.be.greaterThan(0);
  });
});
