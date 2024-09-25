#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Define the address alias for deployment
MODULE_ADDRESS="0xYourModuleAddress"

# Step 1: Compile the Move package
echo "Compiling Move package..."
aptos move compile --package-dir ./ 

# Step 2: Publish the Move package to the blockchain
echo "Deploying Move package to the Aptos blockchain..."
aptos move publish --package-dir ./ --named-addresses MedichainLabs=$MODULE_ADDRESS

echo "Deployment successful!"
