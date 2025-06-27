# 🚀 StyleSync.me - One-Click Installation

## Single File Installer

### Option 1: Download & Run (Recommended)
```bash
curl -sSL https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh | bash
```

### Option 2: Manual Download
1. Download: https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh
2. Make executable: `chmod +x install-stylesync.sh`
3. Run: `./install-stylesync.sh`

## What the Installer Does

✅ **Automatically installs Docker Desktop** (if needed)  
✅ **Downloads the latest StyleSync.me**  
✅ **Sets up the container**  
✅ **Starts the application**  
✅ **Opens in browser at http://localhost:3000**

## System Requirements

- macOS 10.14 or later
- Internet connection
- 2GB RAM available

## After Installation

### Stop the App
```bash
cd ~/StyleSync
docker-compose down
```

### Update the App
```bash
cd ~/StyleSync
./update-stylesync.sh
```

### View Logs
```bash
cd ~/StyleSync
docker-compose logs -f
```

## Installation Location
`~/StyleSync/` (in your home directory)

---

**That's it!** The installer handles everything automatically. 🎉 