import React, { useState } from 'react';
import './WalletConnect.css'; // Ensure you have a corresponding CSS file
import { ethers } from 'ethers'; // Ethers.js for connecting to Ethereum network

const WalletConnect = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [walletType, setWalletType] = useState(''); // Track selected wallet
  const [isAddressHidden, setIsAddressHidden] = useState(false); // Track if address is hidden

  // Function to connect to MetaMask
  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        setProvider(provider);

        const signer = provider.getSigner();
        const account = await signer.getAddress();
        setAccount(account);

        const balance = await signer.getBalance();
        setBalance(ethers.formatEther(balance)); // Display balance in Ether (ETH)
      } else {
        alert("Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error connecting MetaMask wallet:", error);
    }
  };

  // Function to connect to Petra Wallet
  const connectPetraWallet = async () => {
    try {
      if (window.aptos) {
        const provider = window.aptos; // Petra uses window.aptos
        const response = await provider.connect(); // Request user's account
        setProvider(provider);

        const account = response.address;
        setAccount(account);

        const balance = await provider.getBalance(); // Assuming Petra supports a similar method for balance
        setBalance(balance / 1e8); // Adjust balance format if necessary
      } else {
        alert("Please install Petra wallet.");
      }
    } catch (error) {
      console.error("Error connecting Petra wallet:", error);
    }
  };

  // Function to handle wallet connection based on selection
  const connectWallet = async () => {
    if (walletType === 'metamask') {
      await connectMetaMask();
    } else if (walletType === 'petra') {
      await connectPetraWallet();
    } else {
      alert("Please select a wallet to connect.");
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setProvider(null);
    setAccount(null);
    setBalance(null);
    setWalletType('');
    setIsAddressHidden(false);
  };

  // Toggle address visibility
  const toggleAddressVisibility = () => {
    setIsAddressHidden(!isAddressHidden);
  };

  return (
    <div className="wallet-connect-container">
      <h2>Wallet Connect</h2>

      {/* Wallet connection section */}
      {!account && (
        <div className="wallet-selection">
          <select
            className="wallet-select-dropdown"
            value={walletType}
            onChange={(e) => setWalletType(e.target.value)}
          >
            <option value="">Select a Wallet</option>
            <option value="metamask">MetaMask</option>
            <option value="petra">Petra Wallet</option>
            {/* You can add more wallets here */}
          </select>
          <button className="connect-wallet-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      )}

      {/* Wallet info and disconnect section */}
      {account && (
        <div className="wallet-info">
          <p>
            Connected Account:{" "}
            <span className="wallet-data">
              {isAddressHidden ? "**** **** ****" : account}
            </span>
            <button onClick={toggleAddressVisibility} className="toggle-address-btn">
              {isAddressHidden ? "Show" : "Hide"} Address
            </button>
          </p>
          <p>
            Balance:{" "}
            <span className="wallet-data">
              {balance} {walletType === "metamask" ? "ETH" : "APT"}
            </span>
          </p>
          <button className="disconnect-wallet-btn" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;

