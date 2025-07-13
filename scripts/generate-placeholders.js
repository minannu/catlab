const fs = require('fs');
const { createCanvas } = require('canvas');

// Create the images directory if it doesn't exist
const imagesDir = './public/images/team';
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Team members data
const teamMembers = [
  { name: 'Mohammad Harun Or Rashid', filename: 'mohammad-rashid.jpg', initials: 'MR' },
  { name: 'Md. Minhazul Islam', filename: 'minhazul-islam.jpg', initials: 'MI' },
  { name: 'Tanbeer Jubaer', filename: 'tanbeer-jubaer.jpg', initials: 'TJ' }
];

// Generate placeholder images
teamMembers.forEach(member => {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, 400, 400);
  gradient.addColorStop(0, '#3B82F6'); // primary-500
  gradient.addColorStop(1, '#8B5CF6'); // secondary-500

  // Fill background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 400);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 120px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(member.initials, 200, 200);

  // Add name
  ctx.font = 'bold 24px Arial';
  ctx.fillText(member.name, 200, 320);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`${imagesDir}/${member.filename}`, buffer);
  
  console.log(`Generated placeholder image for ${member.name}: ${member.filename}`);
});

console.log('All placeholder images generated successfully!'); 