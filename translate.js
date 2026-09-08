const fs = require('fs');

const reviews = fs.readFileSync('src/data/reviews.js', 'utf8');

// We will create a regex or AST parser? No, let's just make a script that wraps the text with a translation dictionary.
// Or I can just write reviewTranslations.js manually using multi_edit_file.
