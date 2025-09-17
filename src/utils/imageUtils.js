// Utility functions for handling images and fallbacks

// Generate placeholder images using placeholder.com service
export const generatePlaceholderImage = (width = 150, height = 150, text = '') => {
  const encodedText = encodeURIComponent(text || `${width}x${height}`);
  return `https://via.placeholder.com/${width}x${height}/4f46e5/ffffff?text=${encodedText}`;
};

// Local placeholder images for different use cases
export const placeholderImages = {
  avatar: {
    male: '/placeholder-avatar-male.jpg',
    female: '/placeholder-avatar-female.jpg',
    default: '/placeholder-avatar.jpg'
  },
  hero: '/placeholder-hero.jpg',
  testimonial: '/placeholder-testimonial.jpg'
};

// Fallback function for image loading errors
export const handleImageError = (event, fallbackType = 'default') => {
  const img = event.target;
  
  // If the current src is already a placeholder, don't try to fallback again
  if (img.src.includes('placeholder') || img.src.includes('via.placeholder')) {
    return;
  }
  
  // Set a placeholder image based on the type
  switch (fallbackType) {
    case 'avatar':
      img.src = placeholderImages.avatar.default;
      break;
    case 'hero':
      img.src = placeholderImages.hero;
      break;
    case 'testimonial':
      img.src = placeholderImages.testimonial;
      break;
    default:
      // Use a generic placeholder service as final fallback
      img.src = generatePlaceholderImage(150, 150, 'Image');
      break;
  }
};

// Generate a data URL for a simple colored placeholder
export const generateDataUrlPlaceholder = (width = 150, height = 150, bgColor = '#4f46e5', textColor = '#ffffff') => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = width;
  canvas.height = height;
  
  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = textColor;
  ctx.font = `${Math.min(width, height) / 8}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${width}x${height}`, width / 2, height / 2);
  
  return canvas.toDataURL();
};

// Create a simple SVG placeholder
export const generateSVGPlaceholder = (width = 150, height = 150, bgColor = '#4f46e5', textColor = '#ffffff') => {
  const text = `${width}x${height}`;
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 8}" 
            fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `)}`;
};
