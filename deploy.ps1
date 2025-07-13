# PowerShell script to deploy static files to GitHub Pages
# Make sure you're in the project root directory

Write-Host "🚀 Deploying Cat Lab website to GitHub Pages..." -ForegroundColor Green

# Copy static files to root
Write-Host "📁 Copying static files..." -ForegroundColor Yellow
Copy-Item -Path "out\*" -Destination "." -Recurse -Force

# Add all files to git
Write-Host "📝 Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy static files for GitHub Pages"

# Push to GitHub
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your website will be available at: https://YOUR_USERNAME.github.io/catlab-website" -ForegroundColor Cyan
Write-Host "⏳ It may take a few minutes for changes to appear." -ForegroundColor Yellow 