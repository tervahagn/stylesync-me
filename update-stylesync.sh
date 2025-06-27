#!/bin/bash

# StyleSync.me - Update Script

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

INSTALL_DIR="$HOME/StyleSync"

if [ ! -d "$INSTALL_DIR" ]; then
    echo "❌ StyleSync.me is not installed. Run the installer first."
    exit 1
fi

cd "$INSTALL_DIR"

print_info "Updating StyleSync.me..."

# Stop the current container
print_info "Stopping current container..."
docker-compose down

# Backup current data (if any)
if [ -d "data" ]; then
    print_info "Backing up data..."
    cp -r data data.backup.$(date +%Y%m%d_%H%M%S)
fi

# Download the latest version
print_info "Downloading latest version..."
curl -L https://github.com/tervahagn/stylesync-me/archive/refs/heads/public.zip -o stylesync-update.zip

# Extract and update
print_info "Extracting new files..."
unzip -q stylesync-update.zip
cp -r stylesync-me-public/* .
rm -rf stylesync-me-public stylesync-update.zip

# Make scripts executable
chmod +x run-docker.sh
chmod +x update-stylesync.sh

# Restore data backup
if [ -d "data.backup"* ]; then
    print_info "Restoring data..."
    cp -r data.backup.*/data . 2>/dev/null || true
fi

# Rebuild and start
print_info "Rebuilding and starting..."
docker-compose up --build -d

# Wait for startup
sleep 5

if docker-compose ps | grep -q "Up"; then
    print_status "StyleSync.me updated successfully!"
    echo ""
    echo "🌐 Open your browser and go to: http://localhost:3000"
    echo ""
    echo "📁 Installation location: $INSTALL_DIR"
else
    print_warning "Update completed but container failed to start. Check logs:"
    docker-compose logs
fi 