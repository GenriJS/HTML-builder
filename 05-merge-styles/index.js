//modules
const fs = require('fs').promises;  
const path = require('path');

//path const
const bundlePath = path.join(__dirname, 'project-dist/bundle.css');
const stylesPath = path.join(__dirname, 'styles');

//function body
async function packStyles() {
  fs.writeFile(bundlePath, '', 'utf-8');
  
  const files = await fs.readdir(stylesPath);

  files.forEach(async file => {
    const filePath = path.join(stylesPath, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const ext = path.extname(path.basename(filePath));
    if (ext === '.css') {
      await fs.appendFile(bundlePath, fileContent + '\n', 'utf-8');
    }
  });
    
    console.log('Файл успешно собран');

}

//program start
packStyles();
