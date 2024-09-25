// src/context/BlockchainContext.js

import React, { createContext, useState, useEffect } from 'react';
import { createAccount, getAccountBalance, getHealthRecords, addHealthRecord } from '../services/blockchain';

// Create a context for blockchain interaction
export const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [healthRecords, setHealthRecords] = useState([]);

  // Initialize account and load initial data
  useEffect(() => {
    const initBlockchainData = async () => {
      try {
        // Fetch the initial account and balance
        const userAccount = await createAccount();
        setAccount(userAccount);

        const userBalance = await getAccountBalance(userAccount.address);
        setBalance(userBalance);

        // Fetch initial health records
        const records = await getHealthRecords(userAccount.address);
        setHealthRecords(records);
      } catch (error) {
        console.error('Error initializing blockchain data:', error);
      }
    };

    initBlockchainData();
  }, []);

  /**
   * Adds a new health record to the blockchain.
   * @param {Object} record - The health record data to add.
   */
  const addRecord = async (record) => {
    try {
      if (account) {
        const txnHash = await addHealthRecord(account.privateKey, record);
        console.log('Transaction hash:', txnHash);

        // Refresh the health records
        const updatedRecords = await getHealthRecords(account.address);
        setHealthRecords(updatedRecords);
      }
    } catch (error) {
      console.error('Error adding health record:', error);
    }
  };

  return (
    <BlockchainContext.Provider value={{ account, balance, healthRecords, addRecord }}>
      {children}
    </BlockchainContext.Provider>
  );
};
