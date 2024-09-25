#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting the build process..."

# Step 1: Navigate to the frontend directory and build the React app
echo "Building the React frontend..."
cd frontend
npm install
npm run build

# Step 2: Copy the build folder to the server's public directory
echo "Copying the frontend build to the server's public directory..."
cd ..
mkdir -p server/public
cp -r frontend/build/* server/public/

# Step 3: Navigate to the server directory and install dependencies
echo "Installing server dependencies..."
cd server
npm install

echo "Build process completed successfully."
