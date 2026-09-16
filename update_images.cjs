const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// Replace Hero and About images in IMAGES object
content = content.replace(
  /hero:\s*".*?"/,
  'hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80"'
); // Actually let's use a very authentic, dark-themed agency image
content = content.replace(
  /hero:\s*".*?"/,
  'hero: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80"' // Authentic agency working
);
content = content.replace(
  /about:\s*".*?"/,
  'about: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=2850&q=80"' // Authentic UI/UX design screen
);

// 10 extremely realistic, distinct, non-cheesy images for the blog
const blogImages = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800", // Project management / whiteboard
  "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800", // Authentic desk with coffee
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800", // Strategy meeting (real)
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800", // Social media apps on phone
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", // Coding / dev laptop
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Analytics screen (dark)
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Casual team discussion
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", // Tech workspace close up
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800", // Creative brainstorming
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"  // Typing on laptop overhead
];

// Replace the blog images sequentially
let imgIndex = 0;
content = content.replace(/image:\s*'https:\/\/images\.unsplash\.com\/photo-[^']+'/g, (match) => {
  const newImg = blogImages[imgIndex % blogImages.length];
  imgIndex++;
  return `image: '${newImg}'`;
});

fs.writeFileSync('constants.ts', content, 'utf8');
console.log("Images replaced!");
