const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// Replace adsDashboard and branding
content = content.replace(
  /adsDashboard:\s*".*?"/,
  'adsDashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"'
);
content = content.replace(
  /branding:\s*".*?"/,
  'branding: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=800"'
);

fs.writeFileSync('constants.ts', content, 'utf8');
console.log("Homepage images upgraded!");

