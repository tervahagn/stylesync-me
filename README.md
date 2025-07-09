# StyleSync.me

### Your AI-powered Personal Wardrobe Assistant

StyleSync.me transforms your closet into an intelligent, personalized fashion assistant. Effortlessly upload your clothing, and let AI create stylish outfit combinations tailored to your mood, weather, and occasions.

## 🌐 Live Demo

**Try StyleSync.me online:** https://demo.stylesync.me/

## ✨ Features

* **Smart Closet Management:** Upload photos of your clothes—our AI automatically removes backgrounds and categorizes each item.
* **Personalized Outfit Suggestions:** Receive curated outfit recommendations suited to daily weather forecasts, special events, or your current mood.
* **Virtual Stylebook:** Easily save your favorite outfits and revisit them anytime.
* **Intuitive Interface:** Clean, user-friendly design simplifies wardrobe organization and styling.
* **Flexible Plans:** Enjoy a generous free tier or upgrade to unlimited styling with our Pro subscription.

## 🚀 Quick Start

### Option 1: One-Click Install (macOS)
```bash
curl -sSL https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh | bash
```

### Option 2: Manual Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/tervahagn/stylesync-me.git
   cd stylesync-me
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to http://localhost:5173

## 📱 Availability

Available on iOS and Android, with seamless synchronization across devices.

## 💡 Coming Soon

* Calendar integration
* Retail recommendations
* Community sharing

Contributions to these features are warmly welcomed!

## 📞 Support

For any questions, suggestions, or feedback, please contact us through the GitHub issues section or via our website https://stylesync.me

# Run with Docker (requires Docker Desktop)
./run-docker.sh

# Access at http://localhost:3000

curl -sSL https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh | bash

# Install
curl -sSL https://raw.githubusercontent.com/tervahagn/stylesync-me/public/install-stylesync.sh | bash

# Stop
cd ~/StyleSync && docker-compose down

# Update  
cd ~/StyleSync && ./update-stylesync.sh

# Trigger redeploy
