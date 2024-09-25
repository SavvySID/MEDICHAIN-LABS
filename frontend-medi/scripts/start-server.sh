#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Define ports and other configurations
NODE_PORT=8080
FAUCET_PORT=8081

# Step 1: Start the local Aptos node
echo "Starting local Aptos node on port $NODE_PORT..."
aptos node run-local-testnet --with-faucet --testnet-dir ./.aptos-node --faucet-port $FAUCET_PORT --force-restart

# Check if the node started successfully
if [ $? -eq 0 ]; then
    echo "Local Aptos node started successfully on port $NODE_PORT."
else
    echo "Failed to start the Aptos node."
    exit 1
fi

echo "Local testnet is running. You can now deploy contracts and run tests."
