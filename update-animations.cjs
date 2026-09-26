const fs = require('fs');
const path = require('path');

const dir = 'd:/protfolio/dream-code-sphere/src/pages';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.endsWith('.tsx') && file !== 'Hero.tsx') {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace animate={{ with whileInView={{
    content = content.replace(/animate=\{\{/g, 'whileInView={{');
    
    // Add viewport={{ once: true, margin: "-50px" }}
    // The previous regex had escaping issues with quotes.
    content = content.replace(/whileInView=\{\{([^}]+)\}\}/g, (match, p1) => {
      return `whileInView={{${p1}}} viewport={{ once: true, margin: "-50px" }}`;
    });
    
    content = content.replace(/animate="visible"/g, 'whileInView="visible" viewport={{ once: true, margin: "-50px" }}');

    fs.writeFileSync(fullPath, content);
  }
}
