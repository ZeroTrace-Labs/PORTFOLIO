# Quick Start Guide - Portfolio Customization

## 🚀 Getting Started in 5 Minutes

### Step 1: Edit Your Data (data.js)
Open `data.js` and update the following sections:

#### A. Personal Profile
```javascript
profile: {
    name: 'Your Name',
    title: 'Your Professional Title',
    email: 'your.email@example.com',
    phone: 'Your Phone Number',
    cvUrl: 'link-to-your-cv.pdf',
    resumeFileUrl: 'link-to-your-resume.pdf'
}
```

#### B. Social Links
```javascript
social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    // ... other profiles
}
```

### Step 2: Add Your Certifications
In the `certifications` array, add entries like:
```javascript
{
    id: 1,
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    dateEarned: 'January 2024',
    description: 'Your description here',
    skills: ['Penetration Testing', 'Vulnerability Assessment'],
    verificationUrl: 'https://verify-here.com',
    badgeImage: 'assets/certificates/ceh-badge.png',
    certificateImage: 'assets/certificates/ceh-certificate.png'
}
```

### Step 3: Add Your Projects
In the `projects` array, add entries like:
```javascript
{
    id: 1,
    title: 'Your Project Name',
    description: 'What your project does',
    longDescription: 'Detailed project description',
    technologies: ['Python', 'Linux', 'Security Tools'],
    tags: ['security', 'automation'],
    image: 'assets/projects/project-screenshot.png',
    githubUrl: 'https://github.com/your-repo',
    demoUrl: '#',
    reportUrl: 'assets/projects/report.pdf',
    status: 'completed'
}
```

### Step 4: Customize Skills
The skills are organized by category:
```javascript
skills: {
    'Category Name': {
        icon: 'bx bx-icon-class',
        items: [
            'Skill 1',
            'Skill 2',
            'Skill 3'
        ]
    }
}
```

Available icons from Boxicons:
- `bx bx-shield` - Security
- `bx bxl-linux` - Linux
- `bx bx-code-alt` - Programming
- `bx bx-network-chart` - Networking
- `bx bxs-cloud` - Cloud
- `bx bx-wrench` - Tools

### Step 5: Add Home Lab Environments
```javascript
{
    id: 1,
    title: 'Your Lab Name',
    description: 'Lab setup and tools',
    infrastructure: ['Kali Linux', 'Ubuntu', 'Windows VM'],
    image: 'assets/labs/lab-image.png',
    reportUrl: 'assets/labs/lab-report.pdf'
}
```

### Step 6: Add Blog Articles
```javascript
{
    id: 1,
    title: 'Article Title',
    summary: 'Brief summary of your article',
    content: 'Full article content here...',
    image: 'assets/blog/thumbnail.png',
    date: '2024-01-15',
    author: 'Your Name',
    readTime: '8 min',
    tags: ['security', 'tutorial']
}
```

### Step 7: Configure GitHub Integration
Update your GitHub username:
```javascript
github: {
    username: 'your-github-username',
    profileUrl: 'https://github.com/your-username',
    apiUrl: 'https://api.github.com/users/your-username'
}
```

## 📸 Adding Images & Assets

### Where to Store Images

```
assets/
├── certificates/      → Store certification badges & certificates
│   ├── ceh-badge.png
│   ├── securityplus-certificate.png
│   └── ...
├── projects/         → Store project screenshots
│   ├── network-scanner.png
│   ├── log-analyzer.png
│   └── ...
├── labs/            → Store lab environment screenshots
│   ├── active-directory-lab.png
│   ├── kali-lab.png
│   └── ...
├── blog/            → Store blog article thumbnails
│   ├── penetration-testing-guide.png
│   └── ...
└── icons/           → Custom icon files (if needed)
```

### Image Recommendations
- **Certifications**: 400x300px, PNG/JPG format
- **Projects**: 600x400px, PNG/JPG format
- **Labs**: 600x400px, PNG/JPG format
- **Blog**: 800x400px, PNG/JPG format

## 🔗 Important Links to Update

### In `data.js`:
1. **CV/Resume URL**: `profile.cvUrl`
2. **GitHub Profile**: `github.profileUrl`
3. **LinkedIn**: `social.linkedin`
4. **All social media links**: `social` object
5. **Certification verification URLs**: Each cert's `verificationUrl`
6. **Project links**: Each project's `githubUrl`, `demoUrl`, `reportUrl`

### In `script.js` (for EmailJS):
Look for these lines around line 10 and 200:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Line ~10

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...) // Line ~200
```

Replace with your EmailJS credentials from: https://www.emailjs.com/

## ✅ Testing Checklist

After making changes:

### Desktop Testing (1200px+)
- [ ] All sections display correctly
- [ ] Navigation links work
- [ ] Hover effects on cards
- [ ] Images load properly
- [ ] External links work

### Tablet Testing (768px-1199px)
- [ ] Responsive layout looks good
- [ ] Text is readable
- [ ] Navigation menu works
- [ ] Cards display in 2 columns

### Mobile Testing (320px-767px)
- [ ] Responsive layout looks good
- [ ] Text is readable
- [ ] Navigation menu is accessible
- [ ] Cards display in 1 column
- [ ] Images scale properly
- [ ] Buttons are clickable

### Functionality Testing
- [ ] Navigation links scroll to sections
- [ ] GitHub data loads correctly
- [ ] Contact form works
- [ ] All external links open
- [ ] No console errors (F12)

## 🎨 Customization Tips

### Change Section Colors
Edit `style.css` CSS variables:
```css
:root {
    --main-color: #00d4ff;      /* Primary color */
    --accent-color: #00ff88;    /* Accent color */
    --bg-color: #0a0a0a;        /* Background */
    --white-color: #ffffff;     /* Text color */
}
```

### Modify Card Styling
Each section has dedicated CSS. Search for:
- `.certifications` - Certifications cards
- `.projects` - Projects cards
- `.skills-section` - Skills cards
- `.homelab` - Home lab cards
- `.blog` - Blog cards

### Change Animation Speed
Look for `transition:` values in CSS, change from `0.3s` to your preferred duration.

## 📱 Mobile Optimization

### For better mobile experience:
1. Keep certification titles under 50 characters
2. Keep project descriptions under 150 characters
3. Use clear, readable fonts
4. Test with actual devices before publishing

## 🚀 Deploy Your Portfolio

### Option 1: GitHub Pages (Free)
1. Push your files to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Your site is live at `https://username.github.io/repo-name`

### Option 2: Custom Domain
1. Buy domain from GoDaddy, Namecheap, etc.
2. Point DNS to GitHub Pages
3. Add custom domain in GitHub Settings → Pages

### Option 3: Web Hosting
1. Use services like Netlify, Vercel, or traditional hosting
2. Upload files via FTP or git
3. Configure custom domain

## 🔐 Security Notes

- Keep your GitHub token private (if using authenticated API)
- Use HTTPS for your custom domain
- Validate all user inputs on the contact form
- Keep EmailJS credentials in production settings

## 📞 Troubleshooting

### Nothing shows up
- Check browser console (F12)
- Verify `data.js` is loaded before `script.js`
- Check image paths in `data.js`

### Images not loading
- Verify image file exists in correct folder
- Check file path is correct in `data.js`
- Ensure file names match exactly (case-sensitive)

### GitHub data not loading
- Verify username is correct in `data.js`
- Check your internet connection
- GitHub API might be rate-limited (wait 1 hour)

### Contact form not working
- Verify EmailJS public key is set
- Check service ID and template ID
- Verify email template variables match

## 📚 Resources

- **Boxicons**: https://boxicons.com (for icons)
- **EmailJS**: https://www.emailjs.com (for email)
- **GitHub API**: https://docs.github.com/en/rest
- **CSS Reference**: https://developer.mozilla.org/en-US/docs/Web/CSS

---

## ✨ You're Ready!

1. Update `data.js` with your information
2. Add images to `assets/` folders
3. Test on different devices
4. Deploy to production
5. Share with recruiters!

Good luck with your cybersecurity portfolio! 🎯
