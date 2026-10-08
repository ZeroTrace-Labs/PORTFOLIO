# Professional Certificates Folder

This folder stores your professional certification images for display on your portfolio.

## How to Add Certificates

### Step 1: Upload Certificate Images
Place your certificate images in this folder. Supported formats:
- PNG (recommended for best quality)
- JPG/JPEG
- WebP

### Step 2: Update Portfolio Config
Edit `config/portfolioData.js` and add/update your certificate entry in the `certifications` array:

```javascript
{
    id: 1,
    title: 'Certificate Title',
    issuer: 'Issuing Organization',
    issueDate: 'Month Year',
    description: 'Brief description of what you learned',
    skillsLearned: ['Skill 1', 'Skill 2', 'Skill 3'],
    image: 'assets/certificates/your-certificate.png',  // Point to your image file
    verificationLink: 'https://verification-url.com'
}
```

### Step 3: File Naming Convention
- Use descriptive names: `ceh-certificate.png`, `aws-certified.png`
- Keep names lowercase with hyphens
- No spaces in filenames

## Certificate Image Requirements

- **Recommended size**: 300x400px or 400x300px (adjust as needed)
- **Format**: PNG, JPG, or WebP
- **File size**: Keep under 500KB for optimal loading
- **Quality**: High resolution (at least 150-200 DPI) for clarity

## Example File Structure

```
assets/
└── certificates/
    ├── README.md (this file)
    ├── ceh-certificate.png
    ├── aws-certificate.png
    ├── google-certificate.png
    └── securityplus-certificate.png
```

## Display on Portfolio

Once you:
1. Upload the image to this folder
2. Update the config file with the image path
3. Refresh your portfolio website

Your certificates will automatically appear as professional cards in the **Professional Certifications** section.

## Troubleshooting

**Certificates not showing?**
- Check the image file path in `portfolioData.js` matches the filename exactly
- Verify file extension is lowercase (.png, not .PNG)
- Ensure image file is in this `assets/certificates/` folder
- Clear browser cache and refresh the page

**Need to remove a certificate?**
- Simply delete or comment out the certificate object in `portfolioData.js`
- Delete the image file from this folder (optional)
