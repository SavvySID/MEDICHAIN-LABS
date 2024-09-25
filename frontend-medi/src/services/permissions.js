// src/services/permissions.js

import { AptosClient, AptosAccount } from '@aptos-labs/aptos-js';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com'; // Replace with the correct node URL for the network
const client = new AptosClient(NODE_URL);

/**
 * Grants access permission for a specific entity to view a user's health records.
 * @param {string} privateKey - The private key of the user's account.
 * @param {string} entityAddress - The address of the entity to grant access to.
 * @param {string} accessType - The type of access (e.g., 'Read', 'Read/Write').
 * @returns {string} The transaction hash of the submitted transaction.
 */
export const grantPermission = async (privateKey, entityAddress, accessType) => {
  try {
    const account = AptosAccount.fromPrivateKey(privateKey);
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::Permissions::grant_access', // Replace with the actual function path
      arguments: [entityAddress, accessType], // Adjust the arguments as per your contract
      type_arguments: [],
    };

    const transaction = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, transaction);
    const txnHash = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnHash);

    return txnHash;
  } catch (error) {
    console.error('Error granting permission:', error);
    throw new Error('Failed to grant permission');
  }
};

/**
 * Revokes access permission for a specific entity from viewing a user's health records.
 * @param {string} privateKey - The private key of the user's account.
 * @param {string} entityAddress - The address of the entity to revoke access from.
 * @returns {string} The transaction hash of the submitted transaction.
 */
export const revokePermission = async (privateKey, entityAddress) => {
  try {
    const account = AptosAccount.fromPrivateKey(privateKey);
    const payload = {
      type: 'entry_function_payload',
      function: '0xYourModuleAddress::Permissions::revoke_access', // Replace with the actual function path
      arguments: [entityAddress], // Adjust the arguments as per your contract
      type_arguments: [],
    };

    const transaction = await client.generateTransaction(account.address(), payload);
    const signedTxn = await client.signTransaction(account, transaction);
    const txnHash = await client.submitTransaction(signedTxn);
    await client.waitForTransaction(txnHash);

    return txnHash;
  } catch (error) {
    console.error('Error revoking permission:', error);
    throw new Error('Failed to revoke permission');
  }
};

/**
 * Fetches a list of entities that have access to the user's health records.
 * @param {string} address - The user's account address.
 * @returns {Array} An array of entities with their access types.
 */
export const fetchPermissions = async (address) => {
  try {
    // Replace with the actual Move module and resource type
    const permissionsResource = await client.getAccountResource(address, '0xYourModuleAddress::Permissions::AccessList');
    return permissionsResource.data.access_list; // Assuming access_list is stored in this format
  } catch (error) {
    console.error('Error fetching permissions:', error);
    throw new Error('Failed to fetch permissions');
  }
};
