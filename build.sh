#!/bin/bash

# Install dependencies including Swiper
echo "Installing dependencies..."
npm install
npm install swiper@11.0.5 --save

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Create the out directory if it doesn't exist
echo "Creating output directory..."
mkdir -p out

# Copy the .next/static directory to out/_next/static
echo "Copying static assets..."
mkdir -p out/_next
cp -r .next/static out/_next/

# Copy other necessary files
echo "Copying other files..."
cp -r public/* out/

# Success message
echo "Build completed successfully! Your static site is in the 'out' directory." 