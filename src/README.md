# Eyelash Extension Service Landing Page

A beautiful, elegant React component for an eyelash extension service website, inspired by modern beauty service designs.

## Features

- ✨ Clean, sophisticated design with coral accent colors
- 📱 Fully responsive layout
- 🎨 Elegant typography with Playfair Display and Montserrat
- ⭐ Customer reviews section with 5-star ratings
- 🛍️ Service showcase grid
- 📲 App download section
- 🎯 Clear call-to-action buttons throughout
- 🎬 Smooth scroll animations and hover effects

## Installation

### 1. Add to your Vite + React + SWC project

```bash
# Copy the files into your src directory
cp EyelashLanding.jsx src/components/
cp EyelashLanding.css src/components/
```

### 2. Import and use the component

```jsx
import EyelashLanding from './components/EyelashLanding';

function App() {
  return <EyelashLanding />;
}

export default App;
```

## Customization

### Colors
Edit the CSS variables in `EyelashLanding.css`:

```css
:root {
  --primary-coral: #FF8B7B;     /* Main accent color */
  --dark-text: #2C2C2C;         /* Primary text */
  --light-gray: #F8F8F8;        /* Section backgrounds */
  --medium-gray: #CCCCCC;       /* Secondary elements */
  --gold-accent: #D4AF37;       /* Star ratings */
  --white: #FFFFFF;
}
```

### Content
Update the component's data:

- **Reviews**: Edit the `reviews` array in the component
- **Services**: Edit the `services` array
- **Text content**: Replace placeholder text directly in the JSX
- **Images**: Replace `/api/placeholder` URLs with your actual image paths

### Images Required
You'll need to add these images to your project:

1. Hero image (1200x500px) - Main banner with eyelash close-up
2. Content section image (400x400px) - Secondary eyelash image
3. Service images (4 images, 280x200px each) - Different lash service types
4. Phone mockup (300x600px) - App screenshot
5. App store buttons - Download badges for iOS and Android

## Typography

The component uses two Google Fonts:
- **Playfair Display**: Elegant serif for headings
- **Montserrat**: Clean sans-serif for body text

These are automatically imported in the CSS file.

## Sections Included

1. **Fixed Header** - Logo and CTA button
2. **Hero Section** - Large banner with main message
3. **Reviews** - Three customer testimonials with ratings
4. **Features** - Service highlights (timing, products, comfort)
5. **Main Content** - Detailed service description
6. **How It Works** - Three-step booking process
7. **Services Grid** - Four service types with images
8. **App Download** - Mobile app promotion
9. **Footer** - Links and social media icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## Tips for GitHub Pages

1. Build your project: `npm run build`
2. Deploy: `npm run deploy`
3. Your images should be in the `public` folder
4. Update image paths from `/api/placeholder` to your actual image paths

## License

Free to use and modify for your projects.
