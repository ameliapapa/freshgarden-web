# Fresh Garden Restaurant Website

A modern, responsive website for Fresh Garden Restaurant built with React, TypeScript, and Tailwind CSS. The website features a beautiful UI with smooth animations, responsive design, and a comprehensive set of pages for restaurant information, menu, careers, and contact details.

## Project Structure

```
fresh-garden-web/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                 # Images, PDFs, and other static files
│   │   ├── menu_english.pdf
│   │   ├── menu_albanian.pdf
│   │   ├── Wine_menu_FreshGardenRestaurant.pdf
│   │   └── ...
│   ├── contact-us/             # Contact page components
│   │   ├── components/
│   │   │   ├── Navbar13.tsx    # Navigation bar
│   │   │   ├── Contact16.tsx   # Contact form component
│   │   │   ├── Faq6.tsx        # FAQ section
│   │   │   └── Footer3.tsx     # Footer component
│   │   └── index.tsx
│   ├── home/                   # Home page components
│   │   ├── components/
│   │   │   ├── Faq6.tsx        # FAQ section
│   │   │   ├── Gallery19.tsx   # Photo gallery
│   │   │   ├── Gallery24.tsx   # Menu gallery
│   │   │   ├── Header64.tsx    # Hero section
│   │   │   ├── Layout518.tsx   # Main layout
│   │   │   ├── Navbar13.tsx    # Navigation bar
│   │   │   ├── Testimonial33.tsx # Customer reviews
│   │   │   └── Footer3.tsx     # Footer component
│   │   └── index.tsx
│   ├── join-us/                # Careers page components
│   │   ├── components/
│   │   │   ├── Navbar13.tsx    # Navigation bar
│   │   │   └── Career4.tsx     # Job listings
│   │   │   ├── Cta15.tsx     
│   │   │   ├── Header46.tsx   
│   │   │   └── Footer3.tsx     # Footer component
│   │   └── index.tsx
│   ├── lib/                    # Utility functions
│   │   └── utils.ts
│   ├── styles/                 # Global styles
│   │   └── components.css
│   ├── types/                  # TypeScript type definitions
│   │   └── pdf.d.ts
│   ├── App.tsx                 # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css             # Global CSS
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Features

- **Modern Design**: Sleek, responsive UI with smooth animations and transitions
- **Multi-language Support**: Menu available in English and Albanian
- **Interactive Components**:
  - Photo galleries
  - Customer testimonials
  - FAQ sections
  - Contact form
  - Career opportunities listings
- **Optimized Performance**: Built with React and Vite for fast loading times
- **Type Safety**: Written in TypeScript for better code quality
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (for animations)
- React Router (for navigation)

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:ameliapapa/freshgarden-web.git
   cd freshgarden-web/my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.
