#!/bin/bash

# StyleSync.me - Single File Installer
# Download and run: curl -sSL https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh | bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print banner
echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    StyleSync.me Installer                    ║"
echo "║              AI-Powered Wardrobe Assistant                   ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Function to print status
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if running on macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    print_error "This installer is designed for macOS. Please use Docker Desktop on your platform."
    exit 1
fi

print_info "Starting StyleSync.me installation..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_warning "Docker is not installed. Installing Docker Desktop..."
    
    # Check if Homebrew is installed
    if ! command -v brew &> /dev/null; then
        print_info "Installing Homebrew first..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi
    
    # Install Docker Desktop
    print_info "Installing Docker Desktop..."
    brew install --cask docker
    
    print_warning "Docker Desktop has been installed. Please:"
    echo "  1. Open Docker Desktop from Applications"
    echo "  2. Complete the setup wizard"
    echo "  3. Wait for Docker to start (check the whale icon in menu bar)"
    echo "  4. Run this installer again"
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    print_error "Docker is not running. Please start Docker Desktop first."
    echo "  1. Open Docker Desktop from Applications"
    echo "  2. Wait for the whale icon to appear in the menu bar"
    echo "  3. Run this installer again"
    exit 1
fi

print_status "Docker is installed and running"

# Create installation directory
INSTALL_DIR="$HOME/StyleSync"
print_info "Installing to: $INSTALL_DIR"

if [ -d "$INSTALL_DIR" ]; then
    print_warning "Directory already exists. Removing old installation..."
    rm -rf "$INSTALL_DIR"
fi

mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

# Download the project
print_info "Downloading StyleSync.me..."
curl -L https://github.com/tervahagn/stylesync-me/archive/refs/heads/public.zip -o stylesync.zip

# Extract the project
print_info "Extracting files..."
unzip -q stylesync.zip
mv stylesync-me-public/* .
rm -rf stylesync-me-public stylesync.zip

# Make the run script executable
chmod +x run-docker.sh

# Build and start the container
print_info "Building and starting StyleSync.me..."
docker-compose up --build -d

# Wait a moment for the container to start
sleep 5

# Check if the container is running
if docker-compose ps | grep -q "Up"; then
    print_status "StyleSync.me is now running!"
    echo ""
    echo -e "${GREEN}🎉 Installation Complete!${NC}"
    echo ""
    echo "🌐 Open your browser and go to: http://localhost:3000"
    echo ""
    echo "📋 Useful commands (run from $INSTALL_DIR):"
    echo "   Stop the app:    docker-compose down"
    echo "   View logs:       docker-compose logs -f"
    echo "   Restart:         docker-compose restart"
    echo "   Update:          ./update-stylesync.sh"
    echo ""
    echo "📁 Installation location: $INSTALL_DIR"
    echo ""
    echo -e "${BLUE}Enjoy your AI-powered wardrobe assistant!${NC}"
else
    print_error "Failed to start StyleSync.me. Check the logs:"
    docker-compose logs
    exit 1
fi 