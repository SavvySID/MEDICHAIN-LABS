import { AptosClient, AptosAccount, FaucetClient } from 'aptos';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com'; // Replace with your node URL
const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com'; // Replace with the correct faucet URL
const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

// Function to create a new Aptos account
export const createAccount = async () => {
    const account = new AptosAccount();
    await faucetClient.fundAccount(account.address(), 1000); // Fund the account with test tokens
    return account;
};

// Function to get the balance of an Aptos account
export const getAccountBalance = async (address) => {
    const accountResources = await client.getAccountResources(address);
    const coinResource = accountResources.find((r) => r.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>');
    return coinResource.data.coin.value;
};

// Function to get health records
export const getHealthRecords = async (address) => {
    // Fetch health records from the blockchain for the given address
    // This is a placeholder implementation, replace with actual logic
    const accountResources = await client.getAccountResources(address);
    // Filter or process account resources to extract health records
    return accountResources;
};

// Function to add a health record to the blockchain (Example Implementation)
export const addHealthRecord = async (account, recordData) => {
    // Add logic to add a health record to the blockchain
    // This is a placeholder implementation, replace with actual logic
    const payload = {
        // Define the payload structure for the health record
        type: 'entry_function_payload',
        function: '0x1::module_name::function_name', // Replace with actual module and function name
        arguments: [recordData], // Replace with the actual arguments
    };

    const transactionRequest = await client.generateTransaction(account.address(), payload);
    const signedTransaction = await client.signTransaction(account, transactionRequest);
    const transactionResult = await client.submitTransaction(signedTransaction);
    await client.waitForTransaction(transactionResult.hash);

    return transactionResult.hash; // Return transaction hash or other relevant info
};
