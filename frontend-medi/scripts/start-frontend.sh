#!/bin/bash

# Ensure the script exits if any command fails
set -e

# Define the frontend directory path
FRONTEND_DIR="../frontend-medi" # Adjust the path if necessary

# Step 1: Navigate to the frontend directory
echo "Navigating to the frontend directory..."
cd $FRONTEND_DIR

# Step 2: Install dependencies if not already installed
echo "Installing frontend dependencies..."
npm install

# Step 3: Start the React development server
echo "Starting the React frontend development server..."
npm start
