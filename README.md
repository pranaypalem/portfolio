# Pranay Palem - Portfolio Website

A modern, responsive portfolio website built with Jekyll and deployed on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional layout with custom CSS
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Optimized**: Built-in SEO tags and structured data
- **Project Showcase**: Detailed project pages with technical information
- **Experience Timeline**: Interactive timeline of work and education
- **Skills Visualization**: Organized technical skills by domain

## 🛠 Technologies Used

- **Jekyll**: Static site generator
- **HTML5/CSS3**: Modern web standards
- **JavaScript**: Enhanced interactivity
- **Lucide Icons**: Beautiful, consistent icons
- **GitHub Pages**: Free hosting and deployment

## 🏗 Structure

```
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page layouts
│   ├── default.html      # Base layout
│   └── project.html      # Project detail layout
├── _projects/            # Project collection
├── assets/               # Static assets
│   ├── css/main.css      # Main stylesheet
│   └── js/main.js        # JavaScript functionality
├── index.html            # Homepage
└── README.md             # This file
```

## 🚀 Local Development

1. **Install Jekyll**:
   ```bash
   gem install jekyll bundler
   ```

2. **Clone and setup**:
   ```bash
   git clone https://github.com/pranaypalem/Portfolio.git
   cd Portfolio
   bundle install
   ```

3. **Run locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**:
   Navigate to `http://localhost:4000`

## 📦 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Any push to the main branch triggers a new deployment.

### Manual Deployment

If you need to deploy manually:

```bash
bundle exec jekyll build
# Upload _site folder to your hosting provider
```

## 🎨 Customization

### Colors
The color scheme is defined in CSS custom properties in `assets/css/main.css`. You can easily modify:
- `--primary`: Main brand color
- `--accent`: Secondary accent color
- `--background`: Page background
- And many more...

### Content
- Update personal information in `_config.yml`
- Add new projects by creating files in `_projects/`
- Modify sections in `index.html`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: pranaypalem@gmail.com
- **LinkedIn**: [linkedin.com/in/pranaypalem](https://linkedin.com/in/pranaypalem)
- **GitHub**: [github.com/pranaypalem](https://github.com/pranaypalem)

---

Built with ❤️ using Jekyll and deployed on GitHub Pages.