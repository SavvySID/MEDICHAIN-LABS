// src/services/records.js

import { AptosClient, AptosAccount } from '@aptos-labs/aptos-js';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com'; // Replace with the correct node URL for the network
const client = new AptosClient(NODE_URL);

/**
 * Fetches health records for a specific account address.
 * @param {string} address - The account address to fetch records for.
 * @returns {Array} An array of health records.
 */
export const fetchHealthRecords = async (address) => {
  try {
    // Replace with the actual Move module and resource type
    const recordsResource = await client.getAccountResource(address, '0xYourModuleAddress::HealthRecords::Records');
    return recordsResource.data.records; // Assuming records are stored in this format
  } catch (error) {
    console.error('Error fetching health records:', error);
    throw new Error('Failed to fetch health records');
  }
};

/**
 * Adds a new health record to the blockchain.
 * @param {string} privateKey - The private key of the account submitting the transaction.
 * @param {Object} record - The health record data to add.
 * @returns {string} The transaction hash of the submitted transaction.
 */
export const addHealthRecord = async (privateKey, record) => {
  try {
    const account = AptosAccount.fromPrivateKey(privateKey);
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::HealthRecords::add_record', // Replace with the actual function path
      arguments: [record.title, record.details], // Adjust the arguments as per your contract
      type_arguments: [],
    };

    const transaction = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, transaction);
    const txnHash = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnHash);

    return txnHash;
  } catch (error) {
    console.error('Error adding health record:', error);
    throw new Error('Failed to add health record');
  }
};

/**
 * Updates an existing health record on the blockchain.
 * @param {string} privateKey - The private key of the account submitting the transaction.
 * @param {string} recordId - The ID of the record to update.
 * @param {Object} updatedRecord - The updated record data.
 * @returns {string} The transaction hash of the submitted transaction.
 */
export const updateHealthRecord = async (privateKey, recordId, updatedRecord) => {
  try {
    const account = AptosAccount.fromPrivateKey(privateKey);
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::HealthRecords::update_record', // Replace with the actual function path
      arguments: [recordId, updatedRecord.title, updatedRecord.details], // Adjust the arguments as per your contract
      type_arguments: [],
    };

    const transaction = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, transaction);
    const txnHash = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnHash);

    return txnHash;
  } catch (error) {
    console.error('Error updating health record:', error);
    throw new Error('Failed to update health record');
  }
};

/**
 * Deletes a health record from the blockchain.
 * @param {string} privateKey - The private key of the account submitting the transaction.
 * @param {string} recordId - The ID of the record to delete.
 * @returns {string} The transaction hash of the submitted transaction.
 */
export const deleteHealthRecord = async (privateKey, recordId) => {
  try {
    const account = AptosAccount.fromPrivateKey(privateKey);
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::HealthRecords::delete_record', // Replace with the actual function path
      arguments: [recordId], // Adjust the arguments as per your contract
      type_arguments: [],
    };

    const transaction = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, transaction);
    const txnHash = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnHash);

    return txnHash;
  } catch (error) {
    console.error('Error deleting health record:', error);
    throw new Error('Failed to delete health record');
  }
};
