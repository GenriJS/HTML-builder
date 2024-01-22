// modules
const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');


// start
readFolderFiles(folderPath);

//function body
function readFolderFiles(folderPath) {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Ошибка при чтении содержимого папки:', err);
      return;
    }

    const filesOnly = files.filter(file => file.isFile());

    filesOnly.forEach((file) => {

      const filePath = path.join(folderPath, file.name);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Ошибка при чтении информации о файле:', err);
          return;
        }

        // result
        console.log(`${path.parse(filePath).name} - ${path.extname(file.name).slice(1)} - ${stats.size} bytes`);
      });
    });
  });
}


