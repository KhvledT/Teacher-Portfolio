# Dr. Sarah Ahmed - Teacher Portfolio

A modern, responsive teacher portfolio website built with React, Tailwind CSS, and featuring bilingual support (English/Arabic) with dark mode functionality.

## Features

- 🌍 **Bilingual Support**: Full English and Arabic language support with RTL layout
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📊 **Interactive Components**: Skills progress bars, testimonials carousel, contact form
- 🚀 **Fast Performance**: Built with Vite for optimal loading speeds

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and key highlights
- **Skills**: Technical skills with progress indicators
- **Education**: Academic background and achievements
- **Experience**: Professional teaching journey
- **Testimonials**: Student and colleague reviews
- **Contact**: Contact form and information

## Technologies Used

- **React 19** - Frontend framework
- **Tailwind CSS 4** - Styling and responsive design
- **React Router DOM** - Navigation
- **Font Awesome** - Icons
- **Vite** - Build tool and development server

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Education.jsx   # Education section
│   ├── Experience.jsx  # Experience section
│   ├── Testimonials.jsx # Testimonials section
│   ├── Contact.jsx     # Contact section
│   └── Footer.jsx      # Footer
├── context/            # React context
│   └── AppContext.jsx  # Language and theme context
├── data/               # Data files
│   └── portfolioData.js # Bilingual content data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## Customization

### Adding Content
Edit `src/data/portfolioData.js` to update the portfolio content in both English and Arabic.

### Styling
The project uses Tailwind CSS with custom CSS variables for theming. Colors and styles can be modified in `src/index.css`.

### Adding Sections
Create new components in the `src/components/` directory and import them in `src/App.jsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and portfolio purposes.