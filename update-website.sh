#!/bin/bash
# Script to execute on my webserver to use primarily via cron job
# 0 0 1 * * /volume2/apps/personal-portfolio-website/update-website.sh > /dev/null 2>&1

# Navigate to your repository directory
cd /volume2/apps/personal-portfolio-website

# Query the latest changes
git fetch --all

# Pull the latest changes from Git
git pull origin main

# Build the new Docker image
# This automatically runs the build steps inside the container
docker build -t portfolio-website:latest .

# Stop and remove the old container if it's running
docker stop portfolio-website || true
docker rm portfolio-website || true

# Start the new container on port 80
docker run -d \
  --name portfolio-website \
  --restart always \
  --network reverse-proxy_web \
  portfolio-website:latest
