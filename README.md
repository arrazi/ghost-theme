# BBC Indonesia Inspired Ghost Theme

A professional, responsive news theme for Ghost 6.0+ inspired by the clean, modern design of BBC Indonesia.

## Features

- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **BBC Indonesia Design** - Clean, professional news layout
- ⚡ **Fast Loading** - Optimized images and efficient CSS
- 🔍 **SEO Optimized** - Structured data and meta tags
- 🌐 **RTL Support** - Ready for international content
- 📰 **Multiple Layouts** - Homepage, article, author, and tag pages
- 🎯 **Accessibility** - ARIA labels and keyboard navigation
- 📊 **Analytics Ready** - Built-in support for tracking codes
- 🔗 **Social Sharing** - Facebook, Twitter, WhatsApp integration
- 📧 **Newsletter** - Subscription form included

## Installation

1. Download the theme files
2. Create a ZIP file containing all theme files
3. Upload to Ghost Admin → Design → Upload Theme
4. Activate the theme

## Theme Structure

```
bbc-indonesia-theme/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── main.js            # Theme JavaScript
├── partials/
│   ├── navigation.hbs         # Navigation component
│   └── pagination.hbs         # Pagination component
├── default.hbs                # Base template
├── index.hbs                  # Homepage
├── post.hbs                   # Single post
├── page.hbs                   # Static pages
├── tag.hbs                    # Tag archive
├── author.hbs                 # Author archive
├── error.hbs                  # Error pages
├── package.json               # Theme configuration
└── README.md                  # This file
```

## Configuration

### Theme Settings

The theme includes custom settings accessible through Ghost Admin:

- **Navigation Layout**: Choose between logo on left or center
- **Show Publication Cover**: Toggle homepage hero image

### Menu Setup

1. Go to Ghost Admin → Design → Navigation
2. Add your main navigation items
3. Configure secondary navigation for footer

### Featured Content

- Mark posts as "Featured" to display in hero section
- Use "breaking" tag for breaking news section
- Add featured images for better visual impact

## Customization

### Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --color-primary: #bb1919;      /* BBC Red */
    --color-text: #222222;         /* Main text */
    --color-text-light: #666666;   /* Secondary text */
    --color-background: #ffffff;   /* Background */
    --color-border: #e5e5e5;      /* Borders */
    --color-accent: #f5f5f5;      /* Accent background */
}
```

### Typography

The theme uses system fonts for optimal performance:

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
```

### Layout

Adjust container width and spacing:

```css
--container-width: 1200px;
--container-gap: 3.2rem;
--grid-gap: 2.4rem;
```

## Content Guidelines

### Post Structure

For best results, structure your posts with:

1. **Featured Image** - High quality, 16:9 ratio recommended
2. **Excerpt** - Brief description (150-200 characters)
3. **Tags** - Use for categorization and navigation
4. **Author Bio** - Complete author information with profile image

### Image Optimization

- Featured images: 1200x675px minimum
- Thumbnail images: 400x225px
- Author avatars: 200x200px minimum
- Use WebP format when possible for better performance

### Tags vs Categories

- Use **tags** for topics and categories
- Tag "breaking" for urgent news
- Tag "featured" for homepage highlight
- Keep tag names short and descriptive

## Performance

### Optimization Features

- Lazy loading images
- Optimized CSS delivery
- Efficient JavaScript
- Responsive image sizes
- CDN-ready asset structure

### Speed Tips

1. Optimize images before upload
2. Use Ghost's built-in image processing
3. Enable CDN for assets
4. Configure caching headers
5. Use modern image formats (WebP, AVIF)

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- iOS Safari 11+
- Android Chrome 60+

## Accessibility

The theme includes:

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme
- Semantic HTML structure
- Alt text for images
- Focus indicators

## SEO Features

- Structured data markup
- Open Graph meta tags
- Twitter Card support
- Canonical URLs
- XML sitemap compatibility
- Search engine optimized URLs

## Social Media

### Supported Platforms

- Facebook sharing
- Twitter/X sharing  
- WhatsApp sharing
- Copy link functionality
- Author social links

### Setup

Configure social media accounts in:
1. Ghost Admin → Settings → General
2. Author profiles for individual links

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file permissions and paths
2. **Styles not applying**: Clear browser cache and Ghost cache
3. **Mobile menu not working**: Ensure JavaScript is enabled
4. **Search not working**: Implement Ghost Content API integration

### Debug Mode

Add to routes.yaml for development:
```yaml
collections:
  /:
    permalink: /{slug}/
    template: index
```

## Updates

### Version History

- v1.0.0 - Initial release with BBC Indonesia design
- Compatible with Ghost 6.0+

### Updating

1. Backup current theme
2. Download new version
3. Upload and activate
4. Test on staging environment first

## Support

For theme support:

1. Check Ghost documentation
2. Review theme documentation
3. Test in different browsers
4. Check browser console for errors

## License

MIT License - Feel free to modify and distribute

## Credits

- Inspired by BBC Indonesia design
- Built for Ghost CMS
- Responsive design best practices
- Accessibility guidelines compliance

---

**Note**: This theme is designed for news and journalism websites. Customize colors, fonts, and layout to match your brand while maintaining the professional, clean aesthetic of BBC Indonesia.