# StyleSync.me - Docker Setup

Run StyleSync.me on any Mac (or any system with Docker) using this containerized setup.

## Prerequisites

1. **Install Docker Desktop for Mac**
   - Download from: https://www.docker.com/products/docker-desktop
   - Install and start Docker Desktop

## Quick Start

### Option 1: Using the Script (Easiest)
```bash
./run-docker.sh
```

### Option 2: Manual Docker Commands
```bash
# Build and start the container
docker-compose up --build -d

# The app will be available at: http://localhost:3000
```

## Docker Commands

### Start the application
```bash
docker-compose up -d
```

### Stop the application
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Restart the application
```bash
docker-compose restart
```

### Rebuild the container (after code changes)
```bash
docker-compose up --build -d
```

## What's Included

- **Node.js 18 Alpine** - Lightweight base image
- **Production build** - Optimized for performance
- **Static file server** - Serves the built React app
- **Port 3000** - Accessible at http://localhost:3000

## Troubleshooting

### Docker not running
```bash
# Start Docker Desktop first, then run:
docker-compose up -d
```

### Port already in use
```bash
# Stop any existing containers
docker-compose down

# Or change the port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Permission issues
```bash
# Make sure the script is executable
chmod +x run-docker.sh
```

## Development vs Production

This Docker setup is optimized for **production** use. For development:

1. Use the original setup: `npm install && npm run dev`
2. Or create a development Dockerfile with hot reloading

## System Requirements

- macOS 10.14 or later
- Docker Desktop for Mac
- At least 2GB RAM available for Docker 