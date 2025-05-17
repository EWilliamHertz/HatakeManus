# Hatake TCG Website - README

This is a modern, responsive e-commerce website for Hatake TCG, a premium TCG accessories brand with a Nordic-inspired aesthetic.

## Features

- **Responsive Design**: Fully responsive for mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes
- **Product Filtering**: Filter products by category
- **Dynamic Product Pages**: Detailed product information with image galleries
- **Countdown Timers**: Real-time countdown to product release dates
- **Modern UI**: Clean, Nordic-inspired aesthetic

## Pages

- **Home**: Welcome message, featured products, and upcoming events
- **Products**: Complete product listing with filtering and sorting
- **Product Details**: Dynamic pages for each product with galleries and information
- **Events**: Upcoming events listing
- **About**: Company history and mission
- **Partner**: Investment opportunities, team recruitment, and retail partnerships

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/hatake-website.git
   cd hatake-website
   ```

2. Install dependencies
   ```
   pnpm install
   ```

3. Start the development server
   ```
   pnpm run dev
   ```

4. Build for production
   ```
   pnpm run build
   ```

## Image Requirements

The website references the following product images that need to be placed in the `/public/images/` directory:

- Duffel Bag: IMG_2740.jpeg
- 25x 35pt Top-Loaders: IMG_9971.jpg (and additional images)
- 10x 130pt Top-Loaders: IMG_9979.jpg (and additional images)
- Matte Sleeves: IMG_9960.jpg (and additional images)
- PU DeckBox: IMG_9924.jpg (and additional images)
- 480-Slot Binder: IMG_9814.jpg (and additional images)

See the product data file for the complete list of image references.

## Technologies Used

- React
- React Router
- Tailwind CSS
- Vite

## Deployment

After building the project, the contents of the `dist` directory can be deployed to any static hosting service like GitHub Pages, Netlify, or Vercel.

## License

This project is licensed under the MIT License.
