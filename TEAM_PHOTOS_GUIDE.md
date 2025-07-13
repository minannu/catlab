# Team Member Photos Guide

This guide explains how to add photos for team members to the Cat Lab website.

## 📁 **Option 1: Local Images (Recommended)**

### Step 1: Prepare Your Images
1. Get photos of your team members
2. Recommended format: JPG or PNG
3. Recommended size: 400x400 pixels (minimum 200x200)
4. Square aspect ratio works best

### Step 2: Add Images to Project
1. Place the images in: `public/images/team/`
2. Use these exact filenames:
   - `mohammad-rashid.jpg` - for Mohammad Harun Or Rashid
   - `minhazul-islam.jpg` - for Md. Minhazul Islam
   - `tanbeer-jubaer.jpg` - for Tanbeer Jubaer

### Step 3: Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: 200x200 to 800x800 pixels
- **Aspect Ratio**: Square (1:1) recommended
- **File Size**: Under 500KB per image

## 🌐 **Option 2: Online Image URLs**

If you want to use images hosted online, update the `image` field in `components/TeamSection.tsx`:

```javascript
{
  name: 'Mohammad Harun Or Rashid',
  image: 'https://example.com/mohammad-rashid.jpg', // Online URL
  // ... other fields
}
```

## 🎨 **Option 3: Placeholder Images**

The website automatically falls back to initials if images fail to load. You can also use placeholder services:

```javascript
{
  name: 'Mohammad Harun Or Rashid',
  image: 'https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=MR',
  // ... other fields
}
```

## 🔧 **Option 4: Generate Placeholder Images**

### Install Canvas (if you want to generate placeholders):
```bash
npm install canvas
```

### Run the placeholder generator:
```bash
node scripts/generate-placeholders.js
```

This will create placeholder images with initials and names.

## 📝 **Current Image Configuration**

The team section is configured to:
- Display images in circular format
- Fall back to initials if images fail to load
- Support local and online images
- Automatically resize and crop images

## 🎯 **Quick Start**

1. **Get team member photos**
2. **Rename them to match the filenames above**
3. **Place them in `public/images/team/`**
4. **Restart your development server**

The images will automatically appear on the website!

## 🔍 **Testing**

To test if your images are working:
1. Start the development server: `npm run dev`
2. Go to the Team section
3. Check if images load properly
4. If not, check the browser console for errors

## 📱 **Responsive Design**

The images are automatically:
- Responsive on all devices
- Circular with proper aspect ratio
- Optimized for web performance
- Accessible with proper alt text 