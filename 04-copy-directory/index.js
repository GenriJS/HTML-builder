//modules
const fs = require('fs');
const path = require('path');

//const
const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files-copy');

//start 
copyDir();

//function body
function copyDir() {
  // create new folder 
  fs.mkdir(newFolderPath, { recursive: true }, (err) => {
    if (err) {
      console.log('Ошибка при создании папки');
      return;
    } 
  });

  //read directory
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log('Ошибка при чтении папки');
      return;
    }
    // take each file
    files.forEach(file => {
      const filePath = path.join(__dirname, 'files', file);
      const newFolderFile = path.join(newFolderPath, file);
      // copy each file and put it in new folder
      fs.copyFile(filePath, newFolderFile, (err) => {
        if (err) {
          console.log('Ошибка при копировании файла');
          return;
        } 
      });
    });
  });
}
