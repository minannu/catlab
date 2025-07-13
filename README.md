# Cat Lab - Computer Science & Data Mining Research Website

A modern, responsive website for Cat Lab, a research laboratory focused on computer science, machine learning, and data mining. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by academic lab websites
- **Responsive**: Fully responsive design that works on all devices
- **Static Export**: Configured for static hosting on GitHub Pages, Netlify, or similar platforms
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and structured data

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Section**: Lab mission, values, and approach
3. **Research Areas**: Six main research focus areas including Machine Learning, Data Mining, and Algorithm Design
4. **Team Section**: Lab members with profiles and contact information
5. **Publications**: Recent research papers and publications
6. **News & Events**: Latest updates and upcoming events
7. **Contact Section**: Contact form and information
8. **Footer**: Comprehensive footer with links and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd catlab-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Static Export (Recommended for GitHub Pages)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   ```bash
   npm run export
   ```

3. **Deploy the `out` folder** to your hosting platform

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages** in your repository settings
3. **Set source** to `/docs` or `/gh-pages` branch

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `out`

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ }
}
```

### Content
- Update lab information in component files
- Replace placeholder team member data
- Add your actual publications and news
- Update contact information

### Images
- Replace placeholder images with actual photos
- Optimize images for web use
- Consider using Next.js Image component for better performance

## 📁 Project Structure

```
catlab/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── AboutSection.tsx     # About section
│   ├── ResearchAreas.tsx    # Research areas
│   ├── TeamSection.tsx      # Team members
│   ├── PublicationsSection.tsx # Publications
│   ├── NewsSection.tsx      # News and events
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Footer
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🔧 Configuration

### Next.js Config
The project is configured for static export with:
- `output: 'export'` for static generation
- `trailingSlash: true` for compatibility
- `images: { unoptimized: true }` for static hosting

### Tailwind CSS
Custom configuration includes:
- Custom color palette
- Custom animations
- Responsive design utilities
- Component classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 📈 Performance

- Static generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: info@catlab.edu
- Website: [catlab.edu](https://catlab.edu)

---

**Cat Lab** - Advancing Literature & Social Media Analysis Research 