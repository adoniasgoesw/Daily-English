# Daily English

**Daily English** - React • Vite • Tailwind CSS • React Router DOM

Complete English learning application with words, phrases, translations, and pronunciations

[Features](#-features) • [Technologies](#-technologies) • [Installation](#-installation) • [Project Structure](#-project-structure)

---

## 📋 About the Project

**Daily English** is a modern and interactive web application designed to help users learn English daily. The application provides a comprehensive learning experience through words and phrases organized by categories, with Portuguese translations, phonetic pronunciations, and audio pronunciation features.

### 🎯 Objective

Facilitate daily English learning through an intuitive, modern, and engaging platform that combines visual learning with audio pronunciation, making the learning process more effective and enjoyable.

---

## ✨ Features

### 📚 **Word Learning Mode**
- Display English words with Portuguese translations
- Phonetic pronunciation guide for each word
- Audio pronunciation using Web Speech API
- Random word selection from selected category
- Dynamic background color changes for visual engagement

### 💬 **Phrase Learning Mode**
- Common phrases organized by category
- Portuguese translations for all phrases
- Phrase size indicators (small, medium, large)
- Smart phrase rotation (no repetition until all phrases are shown)
- Audio pronunciation for complete phrases

### 🎨 **Category System**
- 25+ categories including:
  - Common Words (200+ words)
  - Family and Friends
  - Home and Housing
  - Shopping
  - Travel
  - Restaurant
  - Food
  - Work
  - Animals
  - Numbers
  - Colors
  - Weather
  - Nature
  - Sports
  - Health
  - Education
  - Technology
  - Entertainment
  - Transportation
  - Clothing
  - Body Parts
  - Time
  - Emotions
  - Verbs
- "All Categories" option to mix words from all categories
- Beautiful dropdown menu for category selection

### 🔊 **Audio Features**
- Text-to-speech pronunciation using Web Speech API
- Male voice selection for natural pronunciation
- Volume on/off toggle
- Automatic pronunciation on word/phrase change
- High-quality audio output

### 🎨 **Visual Experience**
- Dynamic background colors (12 different colors)
- Smooth color transitions
- Modern and clean interface
- Responsive design for all devices
- Intuitive user interactions

### 🖱️ **User Interaction**
- Click anywhere on screen to change word/phrase
- Toggle between words and phrases modes
- Category selection via dropdown
- Volume control button
- Smooth animations and transitions

---

## 🛠️ Technologies

### Frontend

- **React** - JavaScript library for building user interfaces
- **Vite** - Ultra-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Routing for React applications
- **Lucide React** - Modern icon library
- **Axios** - HTTP client for API requests (ready for future API integration)

### Core Dependencies

- **react** - ^19.2.0
- **react-dom** - ^19.2.0
- **react-router-dom** - ^7.12.0
- **tailwindcss** - ^4.1.18
- **@tailwindcss/vite** - ^4.1.18
- **lucide-react** - ^0.562.0
- **axios** - ^1.13.2

### Development Tools

- **Vite** - ^7.2.4
- **ESLint** - JavaScript linter
- **@vitejs/plugin-react** - React plugin for Vite
- **TypeScript types** - Type definitions for React

### Browser APIs

- **Web Speech API** - For text-to-speech functionality
- **Speech Synthesis API** - For audio pronunciation

---

## 📁 Project Structure

```
Daily English/
├── client/                      # React Frontend Application
│   ├── public/                 # Public assets
│   │   ├── favicon.svg         # Application favicon
│   │   ├── favicon.ico         # Favicon for older browsers
│   │   └── _redirects          # Netlify redirects configuration
│   │
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   └── Button.jsx     # Button component
│   │   │
│   │   ├── data/              # Application data (database)
│   │   │   ├── categories.js  # All available categories
│   │   │   ├── words.js       # Words organized by category
│   │   │   ├── phrases.js     # Phrases organized by category
│   │   │   └── index.js       # Central data export
│   │   │
│   │   ├── pages/             # Application pages
│   │   │   └── Daily.jsx      # Main learning page
│   │   │
│   │   ├── routes/            # Route configuration
│   │   │   └── AppRoute.jsx   # Application routes
│   │   │
│   │   ├── services/          # Services and API
│   │   │   └── api.js         # API service (ready for backend)
│   │   │
│   │   ├── App.jsx            # Main App component
│   │   ├── App.css            # App styles
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   │
│   ├── index.html             # HTML template
│   ├── vite.config.js         # Vite configuration
│   ├── netlify.toml           # Netlify deployment config
│   ├── .gitignore            # Git ignore rules
│   └── package.json           # Dependencies and scripts
│
└── README.md                   # Project documentation
```

### 📂 Key Directories

#### `src/data/`
Contains all application data organized in modular files:
- **categories.js**: Array of all available categories
- **words.js**: Words database with translations and pronunciations (500+ words)
- **phrases.js**: Phrases database with translations and sizes (5 phrases per category)
- **index.js**: Central export point for all data

#### `src/pages/`
Main application pages:
- **Daily.jsx**: Main learning interface with all features

#### `src/components/`
Reusable UI components:
- **Button.jsx**: Custom button component

#### `src/routes/`
Routing configuration:
- **AppRoute.jsx**: Defines all application routes

---

## 🚀 Installation

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- Modern web browser with Web Speech API support

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/daily-english.git
   cd daily-english
   ```

2. **Navigate to client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📱 Usage

### Learning Words

1. **Select a category** from the dropdown menu at the top left
2. **Click anywhere on the screen** to see a new word
3. **View the word** with its:
   - Phonetic pronunciation
   - English word
   - Portuguese translation
4. **Listen to pronunciation** (if volume is ON)

### Learning Phrases

1. **Click the "phases" button** to switch to phrase mode
2. **Click anywhere on the screen** to see a new phrase
3. **View the phrase** with its:
   - Size indicator (small, medium, large)
   - English phrase
   - Portuguese translation
4. **Listen to pronunciation** (if volume is ON)

### Controls

- **Volume Button**: Toggle audio pronunciation on/off
- **Category Dropdown**: Select a category to filter words/phrases
- **Mode Toggle**: Switch between "words" and "phases" modes
- **Screen Click**: Change word/phrase and background color

---

## 📱 Responsiveness

The application is fully responsive and works perfectly on:

- 📱 **Mobile** - Small screens (up to 640px)
- 📱 **Tablet** - Medium screens (768px - 1024px)
- 💻 **Desktop** - Large screens (above 1024px)

The interface adapts seamlessly to different screen sizes with:
- Responsive typography
- Flexible layouts
- Touch-friendly buttons
- Optimized spacing

---

## 🎨 Interface

The interface was developed with a focus on:

- ✨ **Modern and clean design** - Minimalist and distraction-free
- 🎯 **Intuitive usability** - Easy to learn and use
- 📱 **Mobile-first experience** - Optimized for mobile devices
- 🎨 **Dynamic colors** - 12 different background colors
- ⚡ **Smooth animations** - Transitions and color changes
- 🔊 **Audio integration** - Natural pronunciation with Web Speech API

### Color Scheme

The application uses a dynamic color system with 12 different colors:
- Red, Blue, Green, Purple, Orange
- Gray, Yellow, Pink, Indigo
- Teal, Cyan, Amber

Each color has a complete set of shades for buttons, hovers, and selected states.

---

## 🌐 Deployment

### Netlify Deployment

The application is configured for easy deployment on Netlify:

1. **Push your code to GitHub**
2. **Connect your repository to Netlify**
3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**

The `netlify.toml` and `_redirects` files are already configured for:
- SPA routing (all routes redirect to index.html)
- Proper build configuration
- Automatic redirects

### Environment Variables

Currently, no environment variables are required. The application works entirely on the frontend.

---

## 🔐 Security

- **No sensitive data** - All data is stored locally in the application
- **No API keys required** - Uses browser APIs only
- **Client-side only** - No backend required
- **Git ignore** - Sensitive files are protected in `.gitignore`

---

## 📊 Data Structure

### Words Database

Each word contains:
```javascript
{
  word: 'English word',
  translation: 'Portuguese translation',
  pronunciation: 'Phonetic pronunciation'
}
```

### Phrases Database

Each phrase contains:
```javascript
{
  phrase: 'English phrase',
  translation: 'Portuguese translation',
  size: 'small' | 'medium' | 'large'
}
```

### Categories

- 25+ categories available
- Each category contains multiple words
- Each category has 5 common phrases
- "All Categories" option for mixed learning

---

## 🎯 Future Enhancements

Potential features for future versions:

- [ ] User accounts and progress tracking
- [ ] Spaced repetition algorithm
- [ ] Quiz mode
- [ ] Flashcard system
- [ ] Progress statistics
- [ ] Custom word lists
- [ ] Offline mode with PWA
- [ ] Multiple language support
- [ ] Dark mode
- [ ] Export/import word lists

---

## 📝 License

This project is under the MIT license. See the LICENSE file for more details.

---

## 👨‍💻 Developer

**Adonias Goes**

- GitHub: [@adoniasgoesw](https://github.com/adoniasgoesw)

---

## 🤝 Contributing

Contributions are always welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly

---

## ⭐ Support

If this project was useful to you, consider giving it a star on GitHub!

---

## 📞 Contact

For questions, suggestions, or support, please open an issue on GitHub.

---

**Developed with ❤️ to facilitate English learning**

*Daily English - Learn English, one word at a time*

