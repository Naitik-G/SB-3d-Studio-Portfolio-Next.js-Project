# MotionDev - Professional 3D Studio Portfolio

<div align="center">
  <img src="public/logo.svg" alt="MotionDev Logo" width="120" />
  
  <p align="center">
    A modern, responsive portfolio website for showcasing 3D modeling, rendering, and visualization services.
  </p>

  <p align="center">
    <a href="https://www.motiondev.xyz">View Demo</a>
  </p>
</div>

---

## 🎯 About The Project

**MotionDev** is a professional portfolio website designed for a 3D studio, showcasing services including:
- 3D Modeling & Product Visualization
- Game Assets & Props
- Character & Creature Modeling
- Environment Design
- 3D Animation & Motion
- Texturing & LookDev

The website features a modern, dark-themed UI with smooth animations, interactive galleries, and a fully functional contact form with email integration.

<!-- ### Screenshots

<div align="center">
  <img src="public/screenshot-home.png" alt="Home Page" width="45%" />
  <img src="public/screenshot-services.png" alt="Services Page" width="45%" />
</div>

--- -->

## ✨ Features

- 🎨 **Modern UI/UX** - Dark theme with green accent colors
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 📧 **Contact Form** - Email integration with Nodemailer
- 🎥 **Mixed Media Support** - Display both images and videos in portfolios
- 🔍 **SEO Optimized** - Complete metadata and structured data
- ⚡ **Fast Performance** - Built with Next.js 15 and optimized images
- 🎭 **Smooth Animations** - Framer Motion for fluid transitions
- 📊 **Analytics Ready** - Google Analytics integration ready
- 🎯 **Active Navigation** - Highlights current page in navbar
- 🌐 **Social Media Integration** - Connected to Instagram and Twitter

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** JavaScript (React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)


### Backend
- **Email Service:** [Nodemailer](https://nodemailer.com/)
- **API Routes:** Next.js API Routes

### SEO & Analytics
- **Metadata:** Next.js Metadata API
- **Structured Data:** Schema.org JSON-LD
- **Sitemap:** Dynamic sitemap generation
- **Robots.txt:** Automated robots.txt

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Gmail account (for contact form email)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/motiondev.git
   cd motiondev
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
```env
   # Email Configuration (Nodemailer with Gmail)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   
   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

4. **Generate Gmail App Password**
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Navigate to Security → 2-Step Verification
   - Go to App passwords
   - Generate a password for "Mail"
   - Copy the 16-character password to `EMAIL_PASSWORD`

5. **Run the development server**
```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---


## 🔐 Environment Variables

Create a `.env.local` file with the following variables:
```env
# Required for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - For production
NEXT_PUBLIC_SITE_URL=https://www.motiondev.xyz
```

### Getting Gmail App Password:

1. Enable 2-Step Verification on your Google Account
2. Go to Security → App passwords
3. Generate password for "Mail"
4. Use the 16-character password (remove spaces)

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Settings → Environment Variables
   - Deploy!

3. **Configure Domain** (Optional)
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

### Deploy to Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

**Note:** Don't forget to add environment variables in your hosting platform's settings!

---

## 🔍 SEO & Optimization

### Implemented SEO Features

- ✅ Dynamic metadata for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Structured data (Schema.org JSON-LD)
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Image optimization with Next.js Image
- ✅ Performance optimized with lazy loading

### SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Create social media OG images (1200x630px)
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Monitor Core Web Vitals

---

## 📧 Contact Form Setup

The contact form uses **Nodemailer with Gmail SMTP**.

### Setup Steps:

1. **Configure Gmail**
```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
```

2. **Test locally**
```bash
   npm run dev
```
   Navigate to `/contact` and test the form

3. **Deploy**
   - Add environment variables to Vercel/hosting platform
   - Test the deployed form


## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#10b981',  // Change green accent
      background: '#000000', // Change background
    }
  }
}
```

### Add New Service

Edit `components/OurWork.jsx`:
```jsx
{
  icon: <YourIcon className="w-8 h-8" />,
  title: "Your Service Name",
  description: "Description here",
  media: [
    { src: yourImage1, type: "image" },
    { src: "/your-video.mp4", type: "video" }
  ]
}
```

### Modify Stats

Edit `components/Achievements.jsx`:
```jsx
const stats = [
  { value: "20+", label: "Your Stat" },
  // Add more stats
];
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**MotionDev Studio**

- Website: [www.motiondev.xyz](https://www.motiondev.xyz)
- Email: devmotion007@gmail.com
- Phone: +91 9518535585
- Instagram: [@motiondev_1](https://www.instagram.com/motiondev_1)
- Twitter: [@motion_dev23733](https://x.com/motion_dev23733)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) for hosting
- [Unsplash](https://unsplash.com/) for placeholder images

---

<div align="center">
  <p>Made with ❤️ by MotionDev</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
```

---

**Additional Files to Create:**

1. **LICENSE** (if using MIT License):
```
MIT License

Copyright (c) 2024 MotionDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

2. **.gitignore** (make sure you have):
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts