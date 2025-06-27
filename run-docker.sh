#!/bin/bash

echo "🚀 Starting StyleSync.me with Docker..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker Desktop for Mac first."
    echo "📥 Download from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# Build and run the container
echo "🔨 Building StyleSync.me container..."
docker-compose up --build -d

echo "✅ StyleSync.me is now running!"
echo "🌐 Open your browser and go to: http://localhost:3000"
echo ""
echo "📋 Useful commands:"
echo "   Stop the app:    docker-compose down"
echo "   View logs:       docker-compose logs -f"
echo "   Restart:         docker-compose restart"
echo ""
echo "🎉 Enjoy your AI-powered wardrobe assistant!" 